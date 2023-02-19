import React from 'react'
import Styles from "../styles/Home.module.css"
import { Line, Bar, Doughnut } from 'react-chartjs-2'
import Chart from 'chart.js/auto';
/*import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);*/

function Dashboard() {

    /* ==================== Line ================== */

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

    
    </div>  
  )
}


export default Dashboard