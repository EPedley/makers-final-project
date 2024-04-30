import cities from "../data/CityList";
import mapData from "../data/mapData.json";
import colourMap from "../data/ColourMap"
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from "react-simple-maps";
import {Tooltip} from "react-tooltip"
import { useState } from "react";
import components from "../data/ComponentList";


export const Map = ( { handleCountryFilterChange, countryFilter, componentFilter, data, date } ) => {


    let minColour = ""
    let maxColour = ""
    let minValue = 0
    let maxValue = 0
    // UPDATE ONCE NEW DATA DOWNLOADED
    let day = 23
    // let day = date.getDate()

  if (data) {
      data = data.filter(entry => {
          const entryDate = new Date(entry.date);
          return entryDate.getDate() === day;
      });
      minColour = colourMap[componentFilter].min
      maxColour = colourMap[componentFilter].max
      minValue = Math.min(...data.map(item => item[componentFilter]))
      maxValue = Math.max(...data.map(item => item[componentFilter]))
  }

    const colorScale = scaleLinear()
    .domain([minValue, maxValue])
    .range([minColour, maxColour]);


    const handleClick = (geo) => {
        const country = geo.properties.name
        let city = cities.find(entry => entry.Country === country).City
        if (countryFilter === city) {
            city = ""
        }
        handleCountryFilterChange(city)
    }

    const [tooltipContent, setTooltipContent] = useState("");

    return (<>
    <ComposableMap width={1500}>
            <Sphere fill="white" stroke="#E4E5E6" strokeWidth={0.5} />
            <Graticule stroke="#E3E2E4" strokeWidth={0.5}/>
            <Geographies geography={mapData}>
            {({ geographies }) =>
                geographies.map((geo) => {
                const country = geo.properties.name
                const city = cities.find(entry => entry.Country === country)?.City || null;
                let cityData = 0
                // check if data has loaded and only change colour if we have data
                if (data) {
                    const cityEntry = data.find(entry => entry.location === city);
                    if (cityEntry) {
                      cityData = cityEntry[componentFilter];
                    }
                  }
                  const fillColour = cityData !== 0 ? colorScale(cityData) : "#F2F2F2";
                return (
                    <Geography 
                        key={geo.rsmKey} 
                        geography={geo} 
                        onClick={() => handleClick(geo)} 
                        fill={fillColour}
                        onMouseEnter={() => {
                          let locationData = data.find( item => item.location === city)
                          if (locationData) {
                            let componentValue = locationData[componentFilter]
                            setTooltipContent(`${components.find(component => component.value === componentFilter)?.label}: ${componentValue}`)
                          }
                        }}
                        onMouseLeave={() => {
                          setTooltipContent("")
                        }}
                        data-tooltip-id="tooltip"
                        data-tooltip-content={tooltipContent}
                        style={{
                          default: {
                              outline: 'none'
                          },
                          hover: {
                              outline: 'none',
                              cursor: 'pointer'
                          },
                          pressed: {
                              outline: 'none'
                          }
                        }}/>
                    )
                })
            }
            </Geographies>
        </ComposableMap>
        <Tooltip id="tooltip" />
    </>
    )
}

