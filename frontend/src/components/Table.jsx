export const Table = ({ data }) => {

  const startDate = data[0].date
// End date
  const endDate = data[data.length - 1].date

  // const dates = [...new Set(arrayOfDicts.map(item => item.date))];

  const cities = ["London"]
  // const cities = [...new Set(arrayOfDicts.map(item => item.name))];

  console.log('Data received in Table component:', data);

  return (
    <div className="Table">
      <table>
        <thead>
          <tr>
            <th>City</th>
            {/* loop between startDate and endDate */}
            <th>{startDate}</th>
            <th>{endDate}</th>
          </tr>
        </thead>

        {cities.map((city) => (
          <tr key={city}>
            <th>{city}</th>
            {data.map((item, index) => {
              if (item.location === city) {
                return <td key={index}>{item.aqi}</td>;
              } else {
                return null;
              }
            })}
          </tr>
        ))}
      </table>

    </div>
  );
};
  // {item.no}{item.no2}{item.o3}{item.so2}{item.pm2_5}{item.pm10}{item.nh3}

    // let generateData = () => {
    //     return 1;
    // };

//   class ApexChart extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
      
//         series: [{
//           name: 'Metric1',
//           data: generateData(18, {
//             min: 0,
//             max: 90
//           })
//         },
//         {
//           name: 'Metric2',
//           data: generateData(18, {
//             min: 0,
//             max: 90
//           })
//         },
//         {
//           name: 'Metric3',
//           data: generateData(18, {
//             min: 0,
//             max: 90
//           })
//         },
//         {
//           name: 'Metric4',
//           data: generateData(18, {
//             min: 0,
//             max: 90
//           })
//         },
//         {
//           name: 'Metric5',
//           data: generateData(18, {
//             min: 0,
//             max: 90
//           })
//         },
//         {
//           name: 'Metric6',
//           data: generateData(18, {
//             min: 0,
//             max: 90
//           })
//         },
//         {
//           name: 'Metric7',
//           data: generateData(18, {
//             min: 0,
//             max: 90
//           })
//         },
//         {
//           name: 'Metric8',
//           data: generateData(18, {
//             min: 0,
//             max: 90
//           })
//         },
//         {
//           name: 'Metric9',
//           data: generateData(18, {
//             min: 0,
//             max: 90
//           })
//         }
//         ],
//         options: {
//           chart: {
//             height: 350,
//             type: 'heatmap',
//           },
//           dataLabels: {
//             enabled: false
//           },
//           colors: ["#008FFB"],
//           title: {
//             text: 'HeatMap Chart (Single color)'
//           },
//         },
      
      
//       };
//     }

//     render() {
//       return (
//         <div>
//           <div id="chart">
//             <ReactApexChart options={this.state.options} series={this.state.series} type="heatmap" height={350} />
//           </div>
//           <div id="html-dist"></div>
//         </div>
//       );
//     }
//   }

//   let chart = new ApexChart()

//     return (
//       <div className="table">
//         {data.map((item, index) => (
//                 <div key={index}>{item}</div>
//             ))}
//         <div>{chart}</div>
//       </div>
//     );
//   };
    

//   const domContainer = document.querySelector('#app');
//   ReactDOM.render(React.createElement(ApexChart), domContainer);