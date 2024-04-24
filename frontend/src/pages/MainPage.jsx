// import { Table } from "../components/Table";
// import  getData  from "../services/requests";
import { useState, useEffect } from "react";
import apiKey from '../../../apiKey'
import { Table } from "../components/Table";

// export const MainPage = () => {
//     const [data, setData] = useState("")

//     const setData = () => {
//         let data = getData();
//     }

//     return (
//         <div className="mainPage">
//             <h1>Welcome to Terra!</h1>
//             <div>{data}</div>
//             {/* <Table data={data}/> */}
//         </div>
//     );
// };


export const MainPage = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const URL = `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=51.5098658&lon=-0.118092&start=1606223802&end=1606482999&appid=${apiKey}`;
      fetch(URL)
        .then((res) => res.json())
        .then((data) => setData(data))
        console.log('Getting the data and setting it')
    }, [data]);
  
    return (
        <div className="mainPage">
            <h1>Welcome to Terra!</h1>
            {/* <Table data={JSON.stringify(data)}/> */}
            <Table data={data}/>
            {/* <div>{JSON.stringify(data)}</div> */}
            {/* <Table data={data}/> */}
        </div>
    );
  };