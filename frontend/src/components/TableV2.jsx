import ApexCharts from "apexcharts";
import { useState, useEffect } from "react";
import cities from "../data/TableCityList";
import colourMap from "../data/ColourMap";
import components from "../data/ComponentList";

const ChartComponent = ( { data, componentFilter, countryFilter } ) => {
  const [chartType, setChartType] = useState('heatmap');
  const [chartHeight, setchartHeight] = useState('300px');


  useEffect(() => {

    let chartSeries = [];

    if (countryFilter !== "") {
      setChartType('heatmap')
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
      setchartHeight('300px')
    }

    else if (componentFilter !== "") {
      setChartType('area')
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
      setchartHeight('4000px')

    }

    else {
      setChartType('area')
    }


    const options = {
      chart: {
        height: chartHeight,
        offsetX: 10,
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
