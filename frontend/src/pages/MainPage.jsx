import { Table } from "../components/Table";
import { useState, useEffect } from "react";
import loadDataFromMongoDB from "../services/requests"
import cities from "../assets/CityList";
import components from "../assets/ComponentList";

export const MainPage = () => {
    const [data, setData] = useState([]);
    const [componentFilter, setComponentFilter] = useState("aqi");
    const [countryFilter, setCountryFilter] = useState("");

    const handleComponentFilterChange = (event) => {
      const inputEl = event.target;
      setComponentFilter(inputEl.value);
    };

    const handleCountryFilterChange = (event) => {
      const inputEl = event.target;
      setCountryFilter(inputEl.value);
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

          {/* <select name="components" id="components" onChange={handleComponentFilterChange}>
            <option value="aqi">AQI</option>
            <option value="co">CO</option>
            <option value="no">NO</option>
            <option value="no2">NO2</option>
            <option value="o3">O3</option>
            <option value="so2">SO2</option>
            <option value="pm2_5">PM2_5</option>
            <option value="pm10">PM10</option>
            <option value="nh3">NH3</option>
          </select> */}

          <select name="components" id="components" onChange={handleComponentFilterChange}>
            {components.map((component, index) => (
              <option key={index} value={component.value}>{component.label}</option>
            ))}
          </select>

          <select name="countryFilter" id="countryFilter" onChange={handleCountryFilterChange}>
            <option value="">Select a city</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>

          {data.length === 0 ? (
            <p>Loading...</p>
          ) : (
            <Table data={data.data} componentFilter={componentFilter} countryFilter={countryFilter}/>
          )}
        </div>
      );
  };

    