import { useState, useEffect } from "react";

// functions
import loadDataFromMongoDB from "../services/requests"

// assets
import terraFullLogo from "../logos/terraFullLogo.png";
import "./MainPage.css"

// components
import { About } from "../components/About";
import { Map } from "../components/Map";
import { InformationButton } from "../components/InformationButton";
import ChartComponent from "../components/Table"

// data
import components from "../data/ComponentList";


export const MainPage = () => {
    const [data, setData] = useState([]);
    const [componentFilter, setComponentFilter] = useState("aqi");
    const [countryFilter, setCountryFilter] = useState("");
    const date = new Date(Date.now() - 864e5)
    const [aboutVisible, setAboutVisible] = useState(false);

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

    const formatDate = (dateString) => {
      const options = {month: 'long', day: 'numeric', year: 'numeric'}
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', options)
    }

    const toggleAbout = () => {
      setAboutVisible(!aboutVisible);
    };
  

  return (
    <div className="mainPage">

      <div className="logo">
        <img src={terraFullLogo} alt="Terra Logo" />
      </div>
          
      <button className="aboutButton" onClick={toggleAbout}></button>

      {aboutVisible && (
        <div className="aboutOverlay">
          <About/>
        </div>
      )}

      <div className="select">
        <select name="componentFilter" id="componentFilter" onChange={handleComponentFilterChange}>
          {components.map((component, index) => (
            <option key={index} value={component.value}>{component.label}</option>
          ))}
        </select>
        <div className="select_arrow"></div>
      </div>

      <Map 
        handleCountryFilterChange={handleCountryFilterChange} 
        componentFilter={componentFilter} 
        countryFilter={countryFilter} 
        data={data.data}
        date={date}
      />

      <div className = "mapLabel">
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
      <ChartComponent data={data.data} componentFilter={componentFilter} countryFilter={countryFilter} />
      )}

      </div>
    );
};

    