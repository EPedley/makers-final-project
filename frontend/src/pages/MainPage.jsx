import { Map } from "../components/Map";
import { useState, useEffect } from "react";
import loadDataFromMongoDB from "../services/requests"
import cities from "../data/CityList";
import ChartComponent from "../components/TableV2"
import components from "../data/ComponentList";
import { Tooltip } from 'react-tooltip'

export const MainPage = () => {
    const [data, setData] = useState([]);
    const [componentFilter, setComponentFilter] = useState("aqi");
    const [countryFilter, setCountryFilter] = useState("");

    const handleComponentFilterChange = (event) => {
      const inputEl = event.target;
      setComponentFilter(inputEl.value);
      // console.log(inputEl.value)
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

    const [content, setContent] = useState("");


  
    return (
        <div className="mainPage">
          <h1>Welcome to Terra!</h1>

          <select name="componentFilter" id="componentFilter" onChange={handleComponentFilterChange}>
            {components.map((component, index) => (
              <option key={index} value={component.value}>{component.label}</option>
            ))}
          </select>

          {/* <select name="countryFilter" id="countryFilter" onChange={handleCountryFilterChange}>
            <option value="">Select a city</option>
            {cities.map((city, index) => (
              <option key={index} value={city.City}>{city.City}</option>
            ))}
          </select> */}


          <Map 
            handleCountryFilterChange={handleCountryFilterChange} 
            componentFilter={componentFilter} 
            countryFilter={countryFilter} 
            data={data.data} setTooltipContent={setContent} data-tooltip-id="my-tooltip"
          />
          <Tooltip id="my-tooltip" content={content}></Tooltip>

          {data.length === 0 ? (
            <p>Loading...</p>
          ) : (
            // <Table data={data.data} componentFilter={componentFilter} countryFilter={countryFilter}/>
            <ChartComponent data={data.data} componentFilter={componentFilter} countryFilter={countryFilter} />

          )}

        </div>
      );
  };

    