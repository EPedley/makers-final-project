// setup
const { connectToDatabase } = require("../db/db");
require("dotenv").config();
const mongoose = require('mongoose');

// api
const apiKey = require('../../apiKey');
const cities = require("./capitalCitiesList");
const City = require("../models/city")


// 01 Apr 2024 12pm
const startDate= 1711972800
// 29 Apr 2024 12pm
const endDate = 1714392000


async function fetchDataFromAPI(lat, lon) {
    const apiKeytoUse = apiKey
    const apiURL = `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${lat}&lon=${lon}&start=${startDate}&end=${endDate}&appid=${apiKeytoUse}`;
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

const seedDatabase = async (data) => {
    try {
        await connectToDatabase();
        const createNewCity = async () => {       
            for (const item of data.list) {
                const city = cities.find(entry => entry.Lat === data.coord.lat).City
                const date = new Date(item.dt * 1000);
                const hour = date.getHours();
                var response = ""
                if (hour === 13) {  
                    response = await City.create({location: city, aqi: item.main.aqi , date: date, co: item.components.co, no: item.components.no, no2: item.components.no2, o3: item.components.o3, so2: item.components.so2, pm2_5: item.components.pm2_5, pm10: item.components.pm10, nh3: item.components.nh3})
                    console.log('Cities inserted successfully' + response);
                }
            }
        }
        await createNewCity()
        console.log("City created successfully")
    } catch (error) {
        console.error('Error seeding:', error);
    } 
}

async function main() {
    try {
        for (let i = 0; i < cities.length; i++) {
            console.log("RUNNING " + i)
            const lat = cities[i].Lat
            const lon = cities[i].Lon
            const data = await fetchDataFromAPI(lat, lon);
            await seedDatabase(data);
    }
    } catch (error) {
            console.error('An error occurred:', error);
    } finally {
        await mongoose.connection.close(true);
    }
}


main()