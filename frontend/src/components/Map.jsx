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



export const Map = ( { handleCountryFilterChange, currentCountryFilter, data } ) => {

    const colorScale = scaleLinear()
    .domain([minValue, maxValue])
    .range([minColour, maxColour]);
    .domain([1, 6])
    .range(["#ffedea", "#6BB7AC"]);

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
                        onMouseEnter={() => {
                          setTooltipContent(country)
                          console.log(geo.properties.name)
                        }}
                        onMouseLeave={() => {
                          setTooltipContent("")
                        }}
                        data-tooltip-id="tooltip"
                        data-tooltip-content={tooltipContent}
                        // style={{
                        //   default: {
                        //     fill: "#D6D6DA",
                        //     outline: "none"
                        //   },
                        //   hover: {
                        //     fill: "#F53",
                        //     outline: "none"
                        // }}
                        />
                </>
                    
                        
                    )
                })
            }
            </Geographies>
        </ComposableMap>
        <Tooltip id="tooltip" />
    </>
        
        
    )
}

