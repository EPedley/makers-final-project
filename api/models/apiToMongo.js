import { MongoClient } from 'mongodb';
import apiKey from '../../apiKey.js';

// import fetch from 'node-fetch'; // Assuming you use node-fetch for making HTTP requests

// import jsonData from './data.json' with { type: 'json' };

class DataEntry {
    constructor(location, aqi, date) {
        this.location = countries.find(entry => entry.Lat === location.lat).City
        this.aqi = aqi
        this.date = new Date(date * 1000);
    }
}


// Function to fetch data from API
async function fetchDataFromAPI() {
    const apiKeytoUse = apiKey
    const apiURL = `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=51.5074&lon=-0.1278&start=1606070400&end=1606339200&appid=${apiKeytoUse}`;
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


async function insertDataIntoMongo(data) {
    const uri = 'mongodb://0.0.0.0/Terra'; 
    const client = new MongoClient(uri);
    // const data = fetchDataFromAPI();

    try {
        await client.connect();
        const database = client.db('Terra'); 
        const collection = database.collection('cities');

        for (const item of data.list) {
            const date = new DataEntry(data.coord, item.main.aqi , item.dt)
            console.log(date)
            const result = await collection.insertOne(date);
            console.log(`${result.insertedCount} documents inserted into MongoDB`);
        }

    } catch (error) {
        console.error('Error inserting data into MongoDB:', error);
    } finally {
        await client.close();
    }
}

async function main() {
    try {
        const data = await fetchDataFromAPI();
        await insertDataIntoMongo(data);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

main()

export default main 

// insertDataIntoMongo();

const countries = [
    {
    "City": "New York City",
    "Country": "USA",
    "Lat": 40.7128,
    "Lon": -74.0060
    }
    // Latitude: 40.7128° N
    // Longitude: 74.0060° W
    ,
    {
    "City": "Tokyo",
    "Country": "Japan",
    "Lat": 35.6895,
    "Lon": 139.6917
    }
    // Latitude: 35.6895° N
    // Longitude: 139.6917° E
    ,
    {
    "City": "London",
    "Country": "UK",
    "Lat": 51.5074,
    "Lon": -0.1278
    }
    // Latitude: 51.5074° N
    // Longitude: 0.1278° W
    ,
    {
    "City": "Paris",
    "Country": "France",
    "Lat": 48.8566,
    "Lon": 2.3522
    }
    // Latitude: 48.8566° N
    // Longitude: 2.3522° E
    ,
    {
    "City": "Beijing",
    "Country": "China",
    "Lat": 39.9042,
    "Lon": 116.4074
    }
    // Latitude: 39.9042° N
    // Longitude: 116.4074° E
    ,
    {
    "City": "Sydney",
    "Country": "Australia",
    "Lat": -33.8688,
    "Lon": 151.2093
    }
    // Latitude: -33.8688° S
    // Longitude: 151.2093° E
    ,
    {
    "City": "Mumbai",
    "Country": "India",
    "Lat": 19.0760,
    "Lon": 72.8777
    }
    // Latitude: 19.0760° N
    // Longitude: 72.8777° E
    ,
    {
    "City": "Moscow",
    "Country": "Russia",
    "Lat": 55.7558,
    "Lon": 37.6176
    }
    // Latitude: 55.7558° N
    // Longitude: 37.6176° E
    ,
    {
    "City": "Rio de Janeiro",
    "Country": "Brazil",
    "Lat": -22.9068,
    "Lon": -43.1729
    }
    // Latitude: -22.9068° S
    // Longitude: 43.1729° W
    ,
    {
    "City": "Cairo",
    "Country": "Egypt",
    "Lat": 30.0444,
    "Lon": 31.2357
    }
    // Latitude: 30.0444° N
    // Longitude: 31.2357° E
    ,
    {
    "City": "Istanbul",
    "Country": "Turkey",
    "Lat": 41.0082,
    "Lon": 28.9784
    }
    // Latitude: 41.0082° N
    // Longitude: 28.9784° E
    ,
    {
    "City": "Toronto",
    "Country": "Canada",
    "Lat": 43.6511,
    "Lon": -79.3470
    }
    // Latitude: 43.6511° N
    // Longitude: 79.3470° W
    ,
    {
    "City": "Cape Town",
    "Country": "South Africa",
    "Lat": -33.9249,
    "Lon": 18.4241
    }
    // Latitude: -33.9249° S
    // Longitude: 18.4241° E
    ,
    {
    "City": "Mexico City",
    "Country": "Mexico",
    "Lat": 19.4326,
    "Lon": -99.1332
    }
    // Latitude: 19.4326° N
    // Longitude: 99.1332° W
    ,
    {
    "City": "Dubai",
    "Country": "UAE",
    "Lat": 25.2769,
    "Lon": 55.2963
    }
    // Latitude: 25.2769° N
    // Longitude: 55.2963° E
,
    {
    "City": "Berlin",
    "Country": "Germany",
    "Lat": 52.5200,
    "Lon": 13.4050
    }
    // Latitude: 52.5200° N
    // Longitude: 13.4050° E
,
    {
    "City": "Buenos Aires",
    "Country": "Argentina",
    "Lat": -34.6037,
    "Lon": -58.3816
    }
    // Latitude: -34.6037° S
    // Longitude: 58.3816° W
,
    {
    "City": "Seoul",
    "Country": "South Korea",
    "Lat": 37.5665,
    "Lon": 126.9780
    }
    // Latitude: 37.5665° N
    // Longitude: 126.9780° E
    ,
    {
    "City": "Rome",
    "Country": "Italy",
    "Lat": 41.9028,
    "Lon": 12.4964
    }
    // Latitude: 41.9028° N
    // Longitude: 12.4964° E
    ,
    {
    "City": "Bangkok",
    "Country": "Thailand",
    "Lat": 13.7563,
    "Lon": 100.5018
    }
    // Latitude: 13.7563° N
    // Longitude: 100.5018° E
]