import cities from "../data/CityList";
import mapData from "../data/mapData.json";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from "react-simple-maps";

export const Map = ( { handleCountryFilterChange, countryFilter, componentFilter, data } ) => {

    const colourMap = {
        // teal
        "aqi": { min: "#ccdedd", max: "#339A8C" },
        // pink
        "co": { min: "#F1CAD6", max: "#AA4465" },
        // blue
        "no": { min: "#CCDFFC", max: "#1B4079" },
        // purple
        "no2": { min: "#F9DCFF", max: "#835091" },
        // fushcia
        "o3": { min: "#FFC9DF", max: "#FF0066" },
        // orange
        "so2": { min: "#EBD0C0", max: "#E1671C" },
        // light blue
        "pm2_5": { min: "#C6F0F0", max: "#28AFB0" },
        // yellow
        "pm10": { min: "#FFE2BC", max: "#FFA630" },
        // purple
        "nh3": { min: "#d8d1e1", max: "#63458A" }
    };

    let minColour = ""
    let maxColour = ""
    let minValue = 0
    let maxValue = 0
    // UPDATE TO BE DYNAMIC
    let day = 23

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

    return (
        <ComposableMap width={2000}>
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
    )
}

