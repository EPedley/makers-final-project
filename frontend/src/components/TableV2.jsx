import ApexCharts from "apexcharts";
import { useState, useEffect } from "react";
import loadDataFromMongoDB from "../services/requests";
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

  console.log(componentFilter)

  useEffect(() => {

    // Transform data for chart rendering
    const chartSeries = cities.map(city => ({
      name: city,
      data: data
        .filter(item => item.location === city) // Filter data by city
        .map(item => ({
          x: item.date, // Date as x-axis
          y: item[componentFilter] // AQI as y-axis
        }))
    }));

    console.log(chartSeries)

    const options = {
      chart: {
        type: "heatmap"
      },
      series: chartSeries,
      xaxis: {
        type: "datetime", // Set x-axis type to datetime
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
          text: "AQI"
        }
      }
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [componentFilter]);

  return <div id="chart"></div>;
};

export default ChartComponent;
