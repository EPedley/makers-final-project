const { MongoClient } = require('mongodb');
const apiKey = require('../../apiKey');
const countries = require("../models/countries");
const mongoose = require('mongoose');
const City = require("./City") // Assuming User model is defined in a separate file
const { connectToDatabase } = require("../db/db");
const { sub } = require('date-fns');
require("dotenv").config();

// import fetch from 'node-fetch'; // Assuming you use node-fetch for making HTTP requests

// import jsonData from './data.json' with { type: 'json' };

// class DataEntry {
//     constructor(location, aqi, date) {
//         this.location = countries.find(entry => entry.Lat === location.lat).City
//         this.aqi = aqi
//         this.date = new Date(date * 1000);
//     }
// }

// Function to fetch data from API
async function fetchDataFromAPI() {
    const apiKeytoUse = apiKey
    const apiURL = `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=51.5074&lon=-0.1278&start=1713909600&end=1713916800&appid=${apiKeytoUse}`;
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

// async function insertDataIntoMongo(data) {
//     const uri = 'mongodb://0.0.0.0/Terra'; 
//     const client = new MongoClient(uri);
//     // const data = fetchDataFromAPI();

//     console.log(data)

//     try {
//         await connectToDatabase();

//         for (const item of data.list) {
//             const city = countries.find(entry => entry.Lat === data.coord.lat).City
//             const response = await City.create({location: city, aqi: item.main.aqi , date: item.dt})

//             const result = await collection.insertOne(response);
//             console.log(`${result.insertedCount} documents inserted into MongoDB`);
//         }

//     } catch (error) {
//         console.error('Error inserting data into MongoDB:', error);
//     } finally {
//         await client.close();
//     }
// }


const seedDatabase = async (data) => {
    try {
        await connectToDatabase();
        const createNewCity = async () => {       
            for (const item of data.list) {
                const city = countries.find(entry => entry.Lat === data.coord.lat).City
                const response = await City.create({location: city, aqi: item.main.aqi , date: item.dt})
                console.log('Cities inserted successfully' + response);
            }
        }

        await createNewCity()
        console.log("City created successfully")

    } catch (error) {
        console.error('Error seeding:', error);
    } finally {
        // Close the database connection
        await mongoose.connection.close(true);
    }
}

async function main() {
    try {
        const data = await fetchDataFromAPI();
        console.log(data)
        await seedDatabase(data);

    } catch (error) {
            console.error('An error occurred:', error);
    }
}
    
    
main()
