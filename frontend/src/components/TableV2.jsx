import ApexCharts from "apexcharts";
import { useState, useEffect } from "react";
import cities from "../data/CityList";
import colourMap from "../data/ColourMap";
import components from "../data/ComponentList";

const ChartComponent = ( { data, componentFilter, countryFilter } ) => {
  const [chartType, setChartType] = useState('heatmap');
  console.log("componentFilter:", componentFilter);
  console.log("countryFilter:", countryFilter);

  useEffect(() => {

    let chartSeries = [];

    if (countryFilter !== "") {
      setChartType('heatmap')
      console.log('countryFilter !== ""')
      console.log(chartType)
      console.log(countryFilter)
      const filteredData = data.filter(item => item.location === countryFilter);
      chartSeries = [{
        name: countryFilter,
        data: filteredData.map(item => ({
          x: item.date, 
          y: item[componentFilter] 
        })),
        color: colourMap[componentFilter].max
      }];
      setChartType('area')
    }

    else if (componentFilter !== "") {
      setChartType('area')
      console.log('countryFilter === ""')
      console.log(chartType)
      console.log(countryFilter)
      chartSeries = cities.map(city => {
        const cityData = data.filter(item => item.location === city.City); 
        return {
          name: city.City,
          data: cityData.map(item => ({
            x: item.date, 
            y: item[componentFilter] 
          })),
          color: colourMap[componentFilter].max
        };
        
      })
      setChartType('heatmap')
    }

    else {
      setChartType('area')
    }


    const options = {
      chart: {
        type: chartType,
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
          text: components.find(component => component.value === componentFilter)?.label 
        }
      },
      dataLabels: {
        enabled: false 
      }
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [componentFilter, countryFilter, chartType, data]);

  return <div id="chart"></div>;
};

export default ChartComponent;
