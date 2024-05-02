// create JSON data for testing purposes

import fs from 'fs';
import loadDataFromMongoDB from '../../src/services/requests.js';

const fetchDataAndWriteToFile = async () => {
  try {
    const data = await loadDataFromMongoDB();
    fs.writeFileSync(".data.json", JSON.stringify(data, null, 2));
    console.log("Data written to data.json successfully.");
  } catch (error) {
    console.error("Error fetching or writing data:", error);
  }
};

fetchDataAndWriteToFile();
