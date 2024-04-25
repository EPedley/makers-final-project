const mongoose = require("mongoose");
const countries = require("./countries")

const CitySchema = new mongoose.Schema({
  aqi: {type: Number},
  date: {type: Date},
  location: {type: Object}
});

// CitySchema.pre('save', async function(next) {
//   const city = await city.findOne({ _id: this._id });
//   try {
//       this.city = cities.find(entry => entry.Lat === location.lat).City
//       // this.date = new Date(date * 1000);
//       // console.log("IM IN THE PRE SCHEMA")

//   next()
//   } catch (error) {
//     next(error);
//   }}
// );

const City = mongoose.model("City", CitySchema);
module.exports = City;

