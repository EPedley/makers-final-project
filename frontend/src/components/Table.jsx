// import React from "react";
// import ReactApexChart from "react-apexcharts"

export const Table = ( { data }) => {

    return (
      <div className="table">
        {/* {data && data.list && data.list.map((item, index) => (
                // <div key={index}>{item.co}{item.no}{item.no2}{item.o3}{item.so2}{item.pm2_5}{item.pm10}{item.nh3}</div>
                <div key={index}>{JSON.stringify(item.component)}</div>
            ))} */}
            {data}
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