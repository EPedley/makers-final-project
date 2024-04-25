import { Table } from "../components/Table";
// import  getData  from "../services/requests";
import { useState, useEffect } from "react";
import loadDataFromMongoDB from "../services/requests"

export const MainPage = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
        console.log("IM IN THE USE EFFECT")
        loadDataFromMongoDB()
        .then(data => {
            setData(data)
            // console.log('Data loaded from MongoDB:', data);
        })
        .catch(error => {
            console.error('An error occurred:', error);
            setData([])
        });
    }, []);

    // useEffect(() => {
    //   const newData = [{aqi: "aqi1", date: "date1", location: "location1"}, {aqi: "aqi2", date: "date2", location: "location2"}]
    //   setData(newData)
    // }, []);
  
    return (
        <div className="mainPage">
          <h1>Welcome to Terra!</h1>
          {data.length === 0 ? (
            <p>Loading...</p>
          ) : (
            // <Table data={Object.entries(data)} />
            <Table data={data.data} />
            // <Table data={data}/>
          )}
        </div>
      );
  };
  
  




// // Call the function to load data
// loadDataFromMongoDB()
//     .then(data => {
//         console.log('Data loaded from MongoDB:', data);
//         // Process your data here
//     })
//     .catch(error => {
//         console.error('An error occurred:', error);
//     });


    // useEffect(() => {
    //   const URL = `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=51.5098658&lon=-0.118092&start=1606223802&end=1606482999&appid=${apiKey}`;
    //   fetch(URL)
    //     .then((res) => res.json())
    //     .then((data) => setData(data))
    //     console.log('Getting the data and setting it')
    // }, [data]);

    