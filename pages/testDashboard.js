import React from 'react'
import Styles from "../styles/Home.module.css"
import {Chart as ChartJs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement} from "chart.js";
import { Line, Bar, Doughnut } from 'react-chartjs-2'
import SideNa from "../components/SideNav"
import dynamic from 'next/dynamic'
//import Chart from 'chart.js/auto';
/*import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);
*/

ChartJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement)
function TestDashboard() {

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
             backgroundColor: "gold",
             borderColor: "gold",
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

        <div className={Styles.testDashboardComponentSidena}>
            <SideNa />
        </div>

{      /*  <div className={Styles.dashboardTestPageHeader}>
            <Header />
  </div>*/}
 
                
        <div className={Styles.testdashboardComponentLineChartsMainParent}>
                 
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
  <div className={Styles.dashboardComponentNumberChild}>type 432</div>
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
      

     <div>
     <div >
        <table border="1" >
          <caption >orders</caption>
  <tr>
    <th>username</th>
    <th>user email</th>
    <th>user phone</th>
    <th>products Info</th>
    <th>total</th>
  </tr>
        
       
  
  <tr >
    <td>nuru</td>
    <td>nuru@gmail.com</td>
    <td>09121212</td>
    <td>name: cack, price: 300$, amount:2, name: cack, price: 300$, amount:2, name: cack, price: 300$, amount:2</td>
    <td>$950</td>
  </tr>

  <tr >
    <td>nuru</td>
    <td>nuru@gmail.com</td>
    <td>09121212</td>
    <td>name: cack, price: 300$, amount:2, name: cack, price: 300$, amount:2, name: cack, price: 300$, amount:2</td>
    <td>$890</td>
  </tr>

  <tr >
    <td>nuru</td>
    <td>nuru@gmail.com</td>
    <td>09121212</td>
    <td>name: cack, price: 300$, amount:2, name: cack, price: 300$, amount:2, name: cack, price: 300$, amount:2</td>
    <td>$1300</td>
  </tr>
  
     
     
        </table>

      </div>
     </div>

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


export default dynamic(() => Promise.resolve(TestDashboard), { ssr: false });
