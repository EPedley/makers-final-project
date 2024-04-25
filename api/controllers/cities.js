const City = require("../models/City");


const getData = async (req, res) => {
  const data = await City.find();
  res.status(200).json({ data: data});
  // console.log("IM IN THE GET DATA FUNC" )
  // console.log(data)
};


const CitiesController = {
  getData: getData,
};


module.exports = CitiesController;



