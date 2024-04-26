import ApexCharts from "apexcharts";
import { useState, useEffect } from "react";
import loadDataFromMongoDB from "../services/requests";
import cities from "../assets/CityList";

const ChartComponent = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    loadDataFromMongoDB()
      .then((info) => {
        console.log("Received data from MongoDB:", info.data);
        if (Array.isArray(info.data)) {
          setChartData(info.data);
        } else {
          console.error("Data received from MongoDB is not an array.");
          setChartData([]);
        }
      })
      .catch((error) => {
        console.error('An error occurred:', error);
        setChartData([]);
      });
  }, []);

  useEffect(() => {
    if (!Array.isArray(chartData) || chartData.length === 0) {
      return;
    }

    // Transform data for chart rendering
    const chartSeries = cities.map(city => ({
      name: city,
      data: chartData
        .filter(item => item.location === city) // Filter data by city
        .map(item => ({
          x: item.date, // Date as x-axis
          y: item.aqi // AQI as y-axis
        }))
    }));

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
            day: "dd MMM",
            hour: "HH:mm"
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
  }, [chartData]);

  return <div id="chart"></div>;
};

export default ChartComponent;
