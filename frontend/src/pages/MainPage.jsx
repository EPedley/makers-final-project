import { Map } from "../components/Map";
import { useState, useEffect } from "react";
import loadDataFromMongoDB from "../services/requests"
import ChartComponent from "../components/TableV2"
import components from "../data/ComponentList";
import { Tooltip } from 'react-tooltip'
import { InformationButton } from "../components/InformationButton";
import cities from "../data/CityList";


export const MainPage = () => {
    const [data, setData] = useState([]);
    const [componentFilter, setComponentFilter] = useState("aqi");
    const [countryFilter, setCountryFilter] = useState("");
    const date = new Date(Date.now() - 864e5)

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

// check use? maybe kill
    const [content, setContent] = useState("");

    const formatDate = (dateString) => {
      const options = {month: 'long', day: 'numeric', year: 'numeric'}
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', options)
    }

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
// check setTooltip stuff
            data={data.data} setTooltipContent={setContent} data-tooltip-id="my-tooltip"
            date={date}
          />
          <Tooltip id="my-tooltip" content={content}></Tooltip>

          <div>
            World mapchart showing 
            {data && " " + components.find(component => component.value === componentFilter)?.label} 
            <InformationButton componentFilter={componentFilter}/>
            <span> </span>
            {componentFilter != "aqi" && "concentration in μg/m³ "}
            for {formatDate(date)} from <a href="https://openweathermap.org/">Open Weather</a>
          </div>

          {data.length === 0 ? (
            <p>Loading...</p>
          ) : (
            // <Table data={data.data} componentFilter={componentFilter} countryFilter={countryFilter}/>
            <ChartComponent data={data.data} componentFilter={componentFilter} countryFilter={countryFilter} />

          )}

        </div>
      );
  };

    