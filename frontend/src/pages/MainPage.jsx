import { Table } from "../components/Table";
import { useState, useEffect } from "react";
import loadDataFromMongoDB from "../services/requests"

export const MainPage = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
        loadDataFromMongoDB()
        .then(data => {
            setData(data)
        })
        .catch(error => {
            console.error('An error occurred:', error);
            setData([])
        });
    }, []);
  
    return (
        <div className="mainPage">
          <h1>Welcome to Terra!</h1>
          {data.length === 0 ? (
            <p>Loading...</p>
          ) : (
            <Table data={data.data} />
          )}
        </div>
      );
  };

    