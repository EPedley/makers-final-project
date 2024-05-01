const { MongoClient } = require('mongodb');
const apiKey = require('../../apiKey');
const countries = require("./capitalCitiesList");
const mongoose = require('mongoose');
const City = require("../models/City");
const { connectToDatabase } = require("../db/db");
const { subDays, format } = require('date-fns');
require("dotenv").config();

// Function to fetch data from API
async function fetchDataFromAPI(lat, lon, start, end) {
    const apiKeytoUse = apiKey;
    const apiURL = `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${lat}&lon=${lon}&start=${start}&end=${end}&appid=${apiKeytoUse}`;
    try {
        const response = await fetch(apiURL, {
            headers: {
                'Authorization': `Bearer ${apiKeytoUse}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch data from API: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data from API:', error);
        throw error;
    }
}

// Function to seed database with fetched data
async function seedDatabase(data) {
    try {
        await connectToDatabase();
        const createNewCity = async () => {
            for (const item of data.list) {
                const city = countries.find(entry => entry.Lat === data.coord.lat).City;
                const date = new Date(item.dt * 1000);
                const hour = date.getHours();
                // Calculate start and end timestamps for last two days
                const end = Math.floor(Date.now() / 1000);
                const start = Math.floor(subDays(end, 2) / 1000);
                if (hour === 13) {
                    await City.create({ location: city, aqi: item.main.aqi, date: date, co: item.components.co, no: item.components.no, no2: item.components.no2, o3: item.components.o3, so2: item.components.so2, pm2_5: item.components.pm2_5, pm10: item.components.pm10, nh3: item.components.nh3 });
                    console.log('City inserted successfully');
                }
            }
        };

        await createNewCity();
        console.log("Cities created successfully");

    } catch (error) {
        console.error('Error seeding:', error);
    } finally {
        // Close the database connection
        await mongoose.connection.close(true);
    }
}

async function main() {
    try {
        // Connect to the database
        await connectToDatabase();

        // Query the database to get the timestamp of the last entry
        const lastEntry = await City.findOne({}, {}, { sort: { 'date': -1 } });

        // Calculate start and end timestamps for last two days
        const end = Math.floor(Date.now() / 1000);
        const start = Math.floor(subDays(end, 2) / 1000);

        // If the difference is more than two days, fetch data from the API and seed the database
        if (lastEntry && lastEntry.date < start) {
            for (let i = 0; i < countries.length; i++) {
                console.log("RUNNING " + i);
                const lat = countries[i].Lat;
                const lon = countries[i].Lon;
                const data = await fetchDataFromAPI(lat, lon, start, end);
                await seedDatabase(data);
            }
        } else {
            console.log("Data is up to date, no need to fetch from API.");
        }
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        // Close the database connection
        await mongoose.connection.close(true);
    }
}

main();
