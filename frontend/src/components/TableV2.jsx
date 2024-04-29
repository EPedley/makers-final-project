import ApexCharts from "apexcharts";
import { useState, useEffect } from "react";
import cities from "../assets/CityList";

const ChartComponent = ( { data, componentFilter, countryFilter } ) => {
  // const [chartData, setChartData] = useState([]);

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
          x: new Date(item.date).getTime(), // Convert date to milliseconds
          y: item[componentFilter] // Get the component value based on the selected filter
        }))
      }];
    }
    // Render based on selected component if countryFilter is empty
    else {
      chartSeries = cities.map(city => {
        const cityData = data.filter(item => item.location === city && item[componentFilter] !== undefined); // Filter data by city and component filter
        return {
          name: city,
          data: cityData.map(item => ({
            x: new Date(item.date).getTime(), // Convert date to milliseconds
            y: item[componentFilter] // Get the component value based on the selected filter
          }))
        };
      });
    }

    const options = {
      chart: {
        type: "heatmap" // Set the chart type based on the state
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
          text: "Value" // Change the y-axis title to a generic one
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
  }, [data, componentFilter, countryFilter]); // Include data, componentFilter, and countryFilter as dependencies

  return <div id="chart"></div>;
};

export default ChartComponent;
