const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const loadDataFromMongoDB = async () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },


  };
  console.log("IM IN THE LOADDATAFROMMONGODB FUNCTION")
  console.log(`${BACKEND_URL}/cities`)
  const response = await fetch(`${BACKEND_URL}/cities`, requestOptions);

  if (response.status !== 200) {
    throw new Error("Unable to fetch posts");
  }

  const data = await response.json();
  return data;
};
export default loadDataFromMongoDB;



// import { MongoClient } from 'mongodb';

// // MongoDB connection URI
// const uri = 'mongodb://0.0.0.0/Terra';

// async function loadDataFromMongoDB() {
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();
//         console.log("IN THE TRY BLOCK")
//         const database = client.db('Terra');
//         const collection = database.collection('London');

//         // Query your collection to load data
//         const data = await collection.find({ /* Your query criteria here */ }).toArray();
//         console.log("IN THE TRY BLOCK - FINDING DATA")

//         // Return the loaded data
//         return data;
//     } catch (error) {
//         console.error('Error loading data from MongoDB:', error);
//         throw error;
//     } finally {
//         // Close the connection when done
//         await client.close();
//     }
// }

// loadDataFromMongoDB()
//   .then(data => {
//     console.log(data)
//   })



// module.exports = loadDataFromMongoDB




// import PollutionClient from './pollutionClient';
// import Pollution from './Pollution'

// const getData = async () => {
//     const pollutionClient = new PollutionClient();
//     const pollution = new Pollution(pollutionClient);

//     const response = await pollution.load().then(() => {
//         let data = pollution.getPollutionData()
//         // console.log(data);
//         return data
//         // console.log(typeof(data))
//         // return data
//     });

//     // console.log(response.status)

//     // if (response.status !== 200) {
//     //   throw new Error("Unable to fetch data");
//     // }
  
//     // const data = await response.json();
//     console.log(response)
//     return response;
//   };

// // const getData = () => {
// //     const pollutionClient = new PollutionClient();

// //     // pollution
// //     const pollution = new Pollution(pollutionClient);

// //     pollution.load().then(() => {
// //         let data = pollution.getPollutionData()
// //         console.log(data);
// //         console.log(typeof(data))
// //         return data
// //     });
// //     // return [1,2,3,4,5,6,7,8,9,10]
// // }

// export default getData



// // check the most recent line of data in the databse
// // if date is yesterday
// // get data from database
// // otherwise
// // run api call and add yesterday to file

// // const getPosts = async (token) => {
// //     const requestOptions = {
// //       method: "GET",
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //     };
// //     const response = await fetch(`${BACKEND_URL}/posts`, requestOptions);
// //     if (response.status !== 200) {
// //       throw new Error("Unable to fetch posts");
// //     }
  
// //     const data = await response.json();
// //     return data;
// //   };


// // import fs from 'fs'; // Import the file system module

// // const getData = () => {
// //     const pollutionClient = new PollutionClient();

// //     // pollution
// //     const pollution = new Pollution(pollutionClient);

// //     return pollution.load().then(() => { // Return the promise from the `then` block
// //         let data = pollution.getPollutionData();
// //         console.log(data);

// //         // Write data to a JSON file
// //         fs.writeFile("../database/data.json", JSON.stringify(data), (err) => {
// //             if (err) {
// //                 console.error("Error writing to file:", err);
// //             } else {
// //                 console.log("Data has been saved to file.");
// //             }
// //         });

// //         return data; // Return data after saving to file
// //     });
// // }

// // export default getData;