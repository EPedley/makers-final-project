import cities from "../data/CityList";
import World from "@react-map/world";

export const Map = ( { handleCountryFilterChange, currentCountryFilter } ) => {
  
    const handleClick = (country) => {
        console.log(country)
        let city = cities.find(entry => entry.Country === country).City
        if (currentCountryFilter === city) {
            city = ""
        }
        handleCountryFilterChange(city)
    }

  return (
    <World 
        onSelect={handleClick} 
        size={"70%"}
        mapColor="#EDEDED" // final colour to be selected
        strokeColor= "lightgrey" // final colour to be selected
        // strokeWidth= number
        hoverColor= "grey"
    />
  )
}