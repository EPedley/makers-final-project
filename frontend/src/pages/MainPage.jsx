import { Table } from "../components/Table";
import { Map } from "../components/Map";
import { useState, useEffect } from "react";
import loadDataFromMongoDB from "../services/requests"
import components from "../data/ComponentList";

export const MainPage = () => {
    const [data, setData] = useState([]);
    const [componentFilter, setComponentFilter] = useState("aqi");
    const [countryFilter, setCountryFilter] = useState("");

    const handleComponentFilterChange = (event) => {
      const inputEl = event.target;
      setComponentFilter(inputEl.value);
    };

    const handleCountryFilterChange = (city) => {
      setCountryFilter(city);
    };
  
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

          <select name="componentFilter" id="componentFilter" onChange={handleComponentFilterChange}>
            {components.map((component, index) => (
              <option key={index} value={component.value}>{component.label}</option>
            ))}
          </select>

          <Map 
            handleCountryFilterChange={handleCountryFilterChange} 
            componentFilter={componentFilter} 
            countryFilter={countryFilter} 
            data={data.data} 
          />

          {data.length === 0 ? (
            <p>Loading...</p>
          ) : (
            <Table data={data.data} componentFilter={componentFilter} countryFilter={countryFilter}/>
          )}

        </div>
      );
  };

    