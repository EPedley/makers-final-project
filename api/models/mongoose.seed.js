const mongoose = require('mongoose');
const City = require("./City") // Assuming User model is defined in a separate file
const { connectToDatabase } = require("../db/db");
const { sub } = require('date-fns');
require("dotenv").config();

const seedDatabase = async () => {
    try {
        // Connect to the database
        await connectToDatabase();
        const createNewCities = async () => {
      // Delete existing cities        
            await City.deleteMany({});
        // Create new cities
            const response = await City.create([
            {
                aqi: 'aqi',
                date: 'date',
                location: 'location'
                }       ,
                
                {
                  aqi: 'aqi2',
                  date: 'date2',
                  location: 'location2'
                  }     
            // Add more cities as needed
            ]);
          console.log('Cities inserted successfully' + response);
        }
        
    await createNewCities()
    console.log("Cities created successfully")
    } catch (error) {
      console.error('Error seeding:', error);
    } finally {
      // Close the database connection
      await mongoose.connection.close(true);
    }
  };

  seedDatabase();