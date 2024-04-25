const City = require("../models/City");


const getData = async (req, res) => {
  const data = await City.find({"location":"location"});
  res.status(200).json({ data: data});
  console.log(data)
  console.log("IM IN THE GET DATA FUNC" )
};


const CitiesController = {
  getData: getData,
};


module.exports = CitiesController;



