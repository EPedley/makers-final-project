const City = require("../models/city");


const getData = async (req, res) => {
  const data = await City.find();
  res.status(200).json({ data: data});
};


const CitiesController = {
  getData: getData,
};


module.exports = CitiesController;



