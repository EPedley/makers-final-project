const City = require("../models/city");
const { MongoClient } = require('mongodb');
const apiKey = require('../../apiKey');
const countries = require("../data/capitalCitiesList");
const mongoose = require('mongoose');
const { connectToDatabase } = require("../db/db");
const { sub } = require('date-fns');
require("dotenv").config();


async function fetchDataFromAPI(lat, lon, startDate, endDate) {
  const unixEndDate = Math.floor(new Date(endDate).getTime() / 1000)
  const unixStartDate = Math.floor(new Date(startDate).getTime() / 1000)
  console.log(startDate)
  console.log(unixStartDate)
  console.log(endDate)
  console.log(unixEndDate)
  const apiKeytoUse = apiKey
  const apiURL = `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${lat}&lon=${lon}&start=${unixStartDate}&end=${unixEndDate}&appid=${apiKeytoUse}`;
  console.log(apiURL)
  
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

async function insertData(startDate, endDate)  {
  try {
    for (let i = 0; i < countries.length; i++) {
      console.log("RUNNING " + i)
      const lat = countries[i].Lat
      const lon = countries[i].Lon
      const data = await fetchDataFromAPI(lat, lon, startDate, endDate);
      await seedDatabase(data);
    }
  } catch (error) {
          console.error('An error occurred:', error);
  } finally {
      // Close the database connection when all operations are finished
      await mongoose.connection.close(true);
  }
}

const getData = async () => {
  let dateTwoDaysAgo = new Date()
  dateTwoDaysAgo.setHours(12, 0, 0, 0)
  dateTwoDaysAgo.setDate(dateTwoDaysAgo.getDate() - 2)
  let data = await City.find();
  // get the date for last time the data was pulled
  const unix = Math.max(...data.map(item => item["date"]))
  const maxDate = new Date(unix)
  // console.log(maxDate)
  if (maxDate < dateTwoDaysAgo) {
    insertData(maxDate, dateTwoDaysAgo)
  } else {
    console.log("Data is already up to date")
  }
  // data = await City.find();
  // res.status(200).json({ data: data});
};

const CitiesController = {
  getData: getData,
};

getData()

module.exports = CitiesController;
