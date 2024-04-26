import cities from "../data/CityList";
import "./styles.css"
import mapData from "./data.json";
import { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from "react-simple-maps";



export const Map = ( { handleCountryFilterChange, currentCountryFilter, data } ) => {

    const colorScale = scaleLinear()
    .domain([1, 6])
    .range(["#ffedea", "#6BB7AC"]);

    // const values = data.map(item => item[componentFilter])
    // console.log(values)

    // const minimum = Math.min(data.map(item => item[componentFilter]))
    // console.log(minimum)

    const handleClick = (geo) => {
        const country = geo.properties.name
        let city = cities.find(entry => entry.Country === country).City
        if (currentCountryFilter === city) {
            city = ""
        }
        handleCountryFilterChange(city)
    }

    // useEffect(() => {
    //     csv(`./vulnerability.csv`).then((data) => {
    //       setData(data);
    //     });
    //   }, []);
    
    //   return (
    //     <ComposableMap
    //       projectionConfig={{
    //         rotate: [-10, 0, 0],
    //         scale: 147
    //       }}
    //     >
    //       <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
    //       <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
    //       {data.length > 0 && (
    //         <Geographies geography={mapData} >
    //           {({ geographies }) =>
    //             geographies.map((geo) => {
    //             //   const d = data.find((s) => s.ISO3 === geo.id);
    //               return (
    //                 <Geography
    //                   key={geo.rsmKey}
    //                   geography={geo}
    //                   fill={"#F5F4F6"}
    //                   onClick={() => handleClick(geo)}
    //                 />
    //               );
    //             })
    //           }
    //         </Geographies>
    //       )}
    //     </ComposableMap>
    //   )

    return (
        <ComposableMap width={2000}>
            <Sphere fill="white" stroke="#E4E5E6" strokeWidth={0.5} />
            <Graticule stroke="#F5F4F6" strokeWidth={0.5}/>
            <Geographies geography={mapData}>
            {({ geographies }) =>
                geographies.map((geo) => {
                const country = geo.properties.name
                let city = cities.find(entry => entry.Country === country)?.City || null;
                console.log(city)
                // const countryData = city ? data.find((item) => item.location === city)?.aqi : 6;
                const fillColour = "black"
                // console.log(data)
                // let cityEntry = cities.find(entry => entry.Country === country);
                // let city = cityEntry ? cityEntry.City : null;
                // console.log(city)
                // let countryData = null;
                // if (city) {
                //     let dataEntry = data.find(item => item.location === city);
                //     countryData = dataEntry ? dataEntry.aqi : null;
                // }
                // const fillColour = countryData ? colorScale(countryData) : "#6BB7AC";
                return (
                    <Geography 
                        key={geo.rsmKey} 
                        geography={geo} 
                        onClick={() => handleClick(geo)} 
                        fill={fillColour}/>
                    )
                })
            }
            </Geographies>
        </ComposableMap>
    )
}

