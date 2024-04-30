import ApexCharts from "apexcharts";
import { useEffect } from "react";
import cities from "../data/CityList";
import colourMap from "../data/ColourMap";
import components from "../data/ComponentList";

const ChartComponent = ( { data, componentFilter, countryFilter } ) => {
  // const [dataType, setDataType] = useState([]);

  // useEffect(() => {
  //   loadDataFromMongoDB()
  //     .then((info) => {
  //       console.log("Received data from MongoDB:", info.data);
  //       if (Array.isArray(info.data)) {
  //         setChartData(info.data);
  //       } else {
  //         console.error("Data received from MongoDB is not an array.");
  //         setChartData([]);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('An error occurred:', error);
  //       setChartData([]);
  //     });
  // }, []);


  useEffect(() => {


    let chartSeries = [];

    // Render based on selected country if countryFilter is not empty
    if (countryFilter !== "") {
      const filteredData = data.filter(item => item.location === countryFilter);
      chartSeries = [{
        name: countryFilter,
        data: filteredData.map(item => ({
          x: item.date, 
          y: item[componentFilter] 
        })),
        color: colourMap[componentFilter].max
      }];
    }
    // Render based on selected component if countryFilter is empty

     else if (countryFilter === "") {chartSeries = cities.map(city => {
        const cityData = data.filter(item => item.location === city.City); 
        return {
          name: city.City,
          data: cityData.map(item => ({
            x: item.date, 
            y: item[componentFilter] 
          })),
          color: colourMap[componentFilter].max
        };
        
      })}
    

    const options = {
      chart: {
        type: "area",
        toolbar: {
          show :false
        } // Set the chart type based on the state,

      },
      series: chartSeries,
      xaxis: {
        type: "datetime",
        labels: {
          datetimeFormatter: {
            year: "yyyy",
            month: "MMM 'yy",
            day: "dd MMM"
          }
        }
      },
      yaxis: {
        title: {
          text: components.find(component => component.value === componentFilter)?.label // Change the y-axis title to a generic one
        }
      },
      dataLabels: {
        enabled: false // Disable data labels
      }
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [componentFilter, countryFilter]); // Include data, componentFilter, and countryFilter as dependencies

  return <div id="chart"></div>;
};

export default ChartComponent;
