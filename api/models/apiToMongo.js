const { MongoClient } = require('mongodb');
const apiKey = require('../../apiKey');
const countries = require("../models/countries");
const mongoose = require('mongoose');
const City = require("./City") // Assuming User model is defined in a separate file
const { connectToDatabase } = require("../db/db");
const { sub } = require('date-fns');
require("dotenv").config();


// Function to fetch data from API
async function fetchDataFromAPI(lat, lon) {
    const apiKeytoUse = apiKey
    const apiURL = `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${lat}&lon=${lon}&start=1711929600&end=1714003200&appid=${apiKeytoUse}`;
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
                const city = countries.find(entry => entry.Lat === data.coord.lat).City
                const date = new Date(item.dt * 1000);
                const hour = date.getHours();
                var response = ""
                // TODO: CALCULATE FOR TIMEZONE
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
    // finally {
    //     // Close the database connection
    //     await mongoose.connection.close(true);
    // }
}

async function main() {
    try {
        for (let i = 0; i < countries.length; i++) {
            console.log("RUNNING " + i)
            const lat = countries[i].Lat
            const lon = countries[i].Lon
            const data = await fetchDataFromAPI(lat, lon);
            await seedDatabase(data);
    }
    } catch (error) {
            console.error('An error occurred:', error);
    } finally {
        // Close the database connection when all operations are finished
        await mongoose.connection.close(true);
    }
}
    
    
main()








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
