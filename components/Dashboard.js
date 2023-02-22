/*import React from 'react'
import Styles from "../styles/Home.module.css"
import {Chart as ChartJs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement} from "chart.js";
import { Line, Bar, Doughnut } from 'react-chartjs-2'*/
//import Chart from 'chart.js/auto';
/*import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);
*/
/*
ChartJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement)
function Dashboard() {

   /* useEffect(() => (
        window.Chart = Chart
    ), [])
*/
    /* ==================== Line ================== */
/*
    const lineData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {  label: "sale for 2021 in (k)",
             data: [3, 4, 3, 5, 2],
             borderColor: "green",
             backgroundColor: "yellow",     
             pointBackgrounColor: "blue",
             pointBorderColor: "green"
            },
            {
                label: "sale for 2022 in (k)",
                data: [1, 4, 2, 1, 5],
                borderColor: "red",
                backgroundColor: "blue",     
                pointBackgrounColor: "blue",
                pointBorderColor: "red"
            }
        ]
    }

    const lineOptions = {
        maintainAspectRatio: false,
        title: {
            display: true,
            text: "sale in year"
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 5,
                        stepSize: 1
                    }
                }
            ]
        }
    }

    /* ========================= Bar ================== */
/*
    const barData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {  label: "sale for 2021 in (k)",
             data: [1, 5, 3, 1, 5],
             borderColor: "green",
             backgroundColor: "yellow",     
             pointBackgrounColor: "blue",
             pointBorderColor: "green"
            },
            {
                label: "sale for 2022 in (k)",
                data: [1, 4, 2, 1, 5],
                borderColor: "red",
                backgroundColor: "blue",     
                pointBackgrounColor: "blue",
                pointBorderColor: "red"
            }
        ]
    }

    const barOptions = {
        maintainAspectRatio: false,
        title: {
            display: true,
            text: "sale in year"
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 5,
                        stepSize: 1
                    }
                }
            ]
        }
    }



    /* ======================= Doughnut ======================= */
/*
    const doughnutData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {  label: "sale for 2021 in (k)",
             data: [1, 5, 3, 1, 5],
             backgroundColor: ["green", "red", "blue", "yellow", "gold"],
             borderColor: ["green", "red", "blue", "yellow", "gold"],

            },
        ]
    }

    const doughnutOptions = {
        maintainAspectRatio: false,
        title: {
            display: true,
            text: "sale in year"
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 5,
                        stepSize: 1
                    }
                }
            ]
        }
    }



    /////////////////////////////////////////////



      /* ==================== dishLine chart ================== */
/*
      const dishLineData = {
        labels: ["normal cack", "chocolate cake", "doughnut", "chocolate doughnut", "cake"],
        datasets: [
          {  label: "sale for 2021 in (k)",
             data: [1, 5, 3, 1, 4],
             borderColor: "green",
             backgroundColor: "yellow",     
             pointBackgrounColor: "blue",
             pointBorderColor: "green"
            },
            {
                label: "sale for 2022 in (k)",
                data: [1, 4, 2, 1, 5],
                borderColor: "red",
                backgroundColor: "blue",     
                pointBackgrounColor: "blue",
                pointBorderColor: "red"
            }
        ]
    }

    const dishLineOptions = {
        maintainAspectRatio: false,
        title: {
            display: true,
            text: "sale in year"
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 5,
                        stepSize: 1
                    }
                }
            ]
        }
    }

    /* ========================= Bar ================== */
/*
    const dishBarData = {
        labels: ["normal cack", "chocolate cake", "doughnut", "chocolate doughnut", "cake"],
        datasets: [
          {  label: "sale for 2021 in (k)",
             data: [1, 5, 3, 1, 5],
             borderColor: "green",
             backgroundColor: "yellow",     
             pointBackgrounColor: "blue",
             pointBorderColor: "green"
            },
            {
                label: "sale for 2022 in (k)",
                data: [1, 4, 2, 1, 5],
                borderColor: "red",
                backgroundColor: "blue",     
                pointBackgrounColor: "blue",
                pointBorderColor: "red"
            }
        ]
    }

    const dishBarOptions = {
        maintainAspectRatio: false,

        title: {
            display: true,
            text: "sale in year"
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 5,
                        stepSize: 1
                    }
                }
            ]
        }
    }



    /* ======================= Doughnut ======================= */
/*
    const dishDoughnutData = {
        labels:["normal cack", "chocolate cake", "doughnut", "chocolate doughnut"],
        datasets: [
          {  label: "sale for 2021 in (k)",
             data: [1, 5, 3, 1],
             backgroundColor: ["green", "red", "blue", "yellow",],
             borderColor: ["green", "red", "blue", "yellow"],

            },
        ]
    }

    const dishDoughnutOptions = {
        maintainAspectRatio: true,

        title: {
            display: true,
            text: "sale in year"
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 5,
                        stepSize: 1
                    }
                }
            ]
        }
    }



    /*******test ****************** */
/*
    var data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
          label: "Dataset #1",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 2,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [65, 59, 20, 81, 56, 55, 40],
        }]
      };
      
      var options = {
        maintainAspectRatio: false,
        scales: {
          y: {
            stacked: true,
            grid: {
              display: true,
              color: "rgba(255,99,132,0.2)"
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      };
      
     


  return (
    <div className={Styles.dashboardComponent}>
 
                
        <div className={Styles.dashboardComponentLineChartsMainParent}>
                 
                <div className={Styles.dashboardComponentLineChartTitle}>sales in first two quater</div>
          <div className={Styles.dashboardComponentLineChartParent}>

            <div className={Styles.dashboardComponentLineCharts}>
            <Line data={lineData} options={lineOptions} />
            </div>

            <div className={Styles.dashboardComponentLineCharts}>
            <Bar data={barData} options={barOptions} />
            </div>

            <div className={Styles.dashboardComponentLineCharts}>
                <Doughnut data={doughnutData} options={doughnutOptions} />
            </div>

            </div>

            <div className={Styles.dashboardComponentLineChartTitle}>most sold dishes</div>
      
      <div className={Styles.dashboardComponentLineChartParent}>

            <div className={Styles.dashboardComponentLineCharts}>
            <Line data={dishLineData} options={dishLineOptions} />
            </div>

            <div className={Styles.dashboardComponentLineCharts}>
            <Bar data={dishBarData} options={dishBarOptions} />
            </div>

            <div className={Styles.dashboardComponentLineCharts}>
                <Doughnut data={dishDoughnutData} options={dishDoughnutOptions} />
            </div>

            </div>

        </div>


     
<div className={Styles.canvasContainer}>
 <Bar options={options} data={data}/>
</div>
    
    </div>  
  )
}


export default Dashboard  */

/*
canvas {
  border: 1px dotted red;
}

.chart-container {
  position: relative;
  margin: auto;
  height: 80vh;
  width: 80vw;
}
*/


/* ======================== new style ============================= */


/* 
most sold plates.
users number.
orders.
order type
salse.
*/



import React from 'react'
import Styles from "../styles/Home.module.css"
import {Chart as ChartJs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement} from "chart.js";
import { Line, Bar, Doughnut } from 'react-chartjs-2'
//import Chart from 'chart.js/auto';
/*import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);
*/

ChartJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement)
function Dashboard() {

   /* useEffect(() => (
        window.Chart = Chart
    ), [])
*/
    /* ==================== Line ================== */

    const lineData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {  label: "sale for 2021 in (k)",
             data: [3, 4, 5, 4, 8],
             borderColor: "black",
             backgroundColor: "white",     
             pointBackgrounColor: "gold",
             pointBorderColor: "black"
            },
           
        ]
    }

    const lineOptions = {
        maintainAspectRatio: false,
        title: {
            display: true,
            text: "orders"
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 5,
                        stepSize: 1
                    }
                }
            ]
        }
    }

    /* ========================= Bar ================== */

    const barData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {  label: "sale for 2021 in (k)",
             data: [1, 5, 3, 1, 5],
             borderColor: "green",
             backgroundColor: "black",     
             pointBackgrounColor: "red",
             pointBorderColor: "green"
            },
            {
                label: "sale for 2022 in (k)",
                data: [1, 4, 2, 1, 5],
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 2,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "black",
/*
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 2,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",*/
            }
        ]
    }

    const barOptions = {
        maintainAspectRatio: false,
        title: {
            display: true,
            text: "sale in year"
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 5,
                        stepSize: 1
                    }
                }
            ]
        }
    }



    /* ======================= Doughnut ======================= */

    const doughnutData = {
        labels: ["In Restaurant", "Take Away"],
        datasets: [
          {  
             label: "order type",
             data: [3, 5],
             backgroundColor: ["gold", "black"],
             borderColor: ["gold", "black"],

            },
        ]
    }

    const doughnutOptions = {
        maintainAspectRatio: false,
        title: {
            display: true,
            text: "order type"
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 5,
                        stepSize: 1
                    }
                }
            ]
        }
    }



    /////////////////////////////////////////////



    /* ========================= Bar ================== */

    const dishBarData = {
        labels: ["normal cack", "chocolate cake", "doughnut", "chocolate doughnut", "cake"],
        datasets: [
          { 
             label: "most sold plates",
             data: [1, 5, 3, 1, 5],
            /* backgroundColor: "rgba(255,99,132,0.2)",*/
             backgroundColor: "red",
             borderColor: "rgba(255,99,132,1)",
             borderWidth: 2,
             hoverBackgroundColor: "rgba(255,99,132,0.4)",
             hoverBorderColor: "black",   
            },
         
        ]
    }

    const dishBarOptions = {
        maintainAspectRatio: false,

        title: {
            display: true,
            text: "sale in year"
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 5,
                        stepSize: 1
                    }
                }
            ]
        }
    }




    /*******test ****************** */
/*
    var data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
          label: "Dataset #1",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 2,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [65, 59, 20, 81, 56, 55, 40],
        }]
      };
      
      var options = {
        maintainAspectRatio: false,
        scales: {
          y: {
            stacked: true,
            grid: {
              display: true,
              color: "rgba(255,99,132,0.2)"
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      };
      */
     


  return (
    <div className={Styles.dashboardComponent}>
 
                
        <div className={Styles.dashboardComponentLineChartsMainParent}>
                 
                {/*<div className={Styles.dashboardComponentLineChartTitle}>sales in first two quater</div>*/}
          <div className={Styles.dashboardComponentLineChartParent}>

          <div className={Styles.dashboardComponentNumber}>
            <div className={Styles.dashboardComponentNumberTitle}>salse</div>
            <div className={Styles.dashboardComponentNumberChild}>$900.000</div>
          </div>

            <div className={Styles.dashboardComponentLineCharts}>
            <Bar data={barData} options={barOptions} />
            </div>

            </div>

            <div className={Styles.dashboardComponentLineChartParent}>

<div className={Styles.dashboardComponentNumber}>
  <div className={Styles.dashboardComponentNumberTitle}>orders</div>
  <div className={Styles.dashboardComponentNumberChild}>238</div>
</div>

  <div className={Styles.dashboardComponentLineCharts}>
  <Line data={lineData} options={lineOptions} />
  </div>

  </div>


  <div className={Styles.dashboardComponentLineChartParent}>

<div className={Styles.dashboardComponentNumber}>
  <div className={Styles.dashboardComponentNumberTitle}>orders</div>
  <div className={Styles.dashboardComponentNumberChild}>432</div>
</div>

  <div className={Styles.dashboardComponentLineCharts}>
  <Doughnut data={doughnutData} options={doughnutOptions} />
  </div>

  </div>



  
  <div className={Styles.dashboardComponentLineChartParent}>

<div className={Styles.dashboardComponentNumber}>
  <div className={Styles.dashboardComponentNumberTitle}>most sold plates</div>
  <div className={Styles.dashboardComponentNumberChild}></div>
</div>

  <div className={Styles.dashboardComponentLineCharts}>
  <Bar data={dishBarData} options={dishBarOptions} />
  </div>

  </div>


            
           {/* <div className={Styles.dashboardComponentLineChartTitle}>most sold dishes</div>*/}
      
     

        </div>

{
   /* 
<div className={Styles.canvasContainer}>
 <Bar options={options} data={data}/>
</div>*/
 }
    </div>  
  )
}


export default Dashboard

/*


 <div className={Styles.dashboardComponentLineChartParent}>

            <div className={Styles.dashboardComponentLineCharts}>
            <Line data={dishLineData} options={dishLineOptions} />
            </div>

            <div className={Styles.dashboardComponentLineCharts}>
            <Bar data={dishBarData} options={dishBarOptions} />
            </div>

            <div className={Styles.dashboardComponentLineCharts}>
                <Doughnut data={dishDoughnutData} options={dishDoughnutOptions} />
            </div>

            </div>
            */