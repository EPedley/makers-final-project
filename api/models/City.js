const mongoose = require("mongoose");


const CitySchema = new mongoose.Schema({
  aqi: {type: Number},
  date: {type: Date},
  location: {type: String},
  co: {type: Number},
  no: {type: Number},
  no2: {type: Number},
  o3: {type: Number},
  so2: {type: Number},
  pm2_5: {type: Number},
  pm10: {type: Number},
  nh3: {type: Number}
});


const City = mongoose.model("City", CitySchema);
module.exports = City;

