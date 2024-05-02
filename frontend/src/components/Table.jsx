import ApexCharts from "apexcharts";
import { useState, useEffect } from "react";
import cities from "../data/TableCityList";
import colourMap from "../data/ColourMap";
import components from "../data/ComponentList";

const ChartComponent = ( { data, componentFilter, countryFilter } ) => {
  const [chartType, setChartType] = useState('heatmap');
  const [chartHeight, setchartHeight] = useState('3000px');


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
      setChartType('heatmap');
      // setChartHeight('4000px');
    
      // Create a set of all dates from the data
      const allDates = new Set(data.map(item => item.date));
    
      // Convert the set of dates to an array and sort them chronologically
      const sortedDates = Array.from(allDates).sort((a, b) => new Date(a) - new Date(b));
    

      // Create a complete dataset with zero values for missing dates
      const completeData = [];
      sortedDates.forEach(date => {
        cities.forEach(city => {
          const cityData = data.find(item => item.location === city.City && item.date === date);
          if (cityData) {
            completeData.push({
              x: date,
              y: cityData[componentFilter],
              name: city.City
            });
          } else {

            completeData.push({
              x: date,
              y: 0,
              name: city.City
            });
          }
        });
      });
    
      // Group the complete dataset by city for the heatmap
      chartSeries = cities.map(city => ({
        name: city.City,
        data: completeData.filter(item => item.name === city.City),
        color: colourMap[componentFilter].max
      }));
      setchartHeight('3000px')
    }
    

    else {
      setChartType('area')
    }

    const options = {
      chart: {
        height: chartHeight,
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
      },
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    return () => {
      // chart.destroy();
    };
  }, [componentFilter, countryFilter, chartType, data]);

  return <div data-testid="chart" id="chart"></div>;
};

export default ChartComponent;
