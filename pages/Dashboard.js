/*import React from 'react'
import Style from "../styles/Home.module.css"
import DashboardComponent from '../components/dashboard'
import Header from "../components/Header"
import mongoose from 'mongoose'
import Order from "../utils/models/orderModel"
import db from "../utils/db"

function Dashboard({order}) {
 
  return (
    <div className={Style.dashboardPage}>
        <div>
        <Header />
        </div>

        <div className={Style.dashboardPageBody}>
          <DashboardComponent />
          </div>

        <div className={Style.dashboardPageTableParent}>
        <table border="1" className={Style.DashboardPageTable}>
          <caption className={Style.dashboardPageTableTitle}>orders</caption>
  <tr>
    <th>username</th>
    <th>user email</th>
    <th>user phone</th>
    <th>products Info</th>
  </tr>
        {order.map((item) => (
       
  <>
  <tr key={item._id}>
    <td>{item.username} </td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.productsInfo}</td>
  </tr>
  
        </>
        ))}
        </table>

      </div>

      <div className={Style.dashboardPageFooter}>kkk</div>

    </div>
  )
}

export async function getServerSideProps(){
  await mongoose.connect(process.env.MONGODB_URI)
  const orders = await Order.find().lean()

  return {props: {order: orders.map(db.convertDocToObj),}}
}
export default Dashboard
*/


/*
  <div>nnnn: {order.map(i => i.email)}</div>
        <div>{order.map((items) => {
          <div key={items._id}>
            <div> nnnname: {items.username}</div>
            </div>
        })}</div>
*/

/*
colspan="3"
*/




import React from 'react'
import Style from "../styles/Home.module.css"
import DashboardComponent from '../components/dashboard'
import Header from "../components/Header"
import dynamic from 'next/dynamic'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {BsCartCheck} from "react-icons/bs"
import {useSession} from "next-auth/react"
import Link from "next/link"
import styles from "../styles/Home.module.css"

/*import mongoose from 'mongoose'
import Order from "../utils/models/orderModel"
import db from "../utils/db"*/

function Dashboard() {

  const {data: session, status} = useSession()

 
  return (
    <div className={Style.dashboardPage}>
        <div>
        <Header />
        </div>

        <div className={Style.dashboardPageDropdownMediaQuery}>
              
{status === 'loading' ? (
                'Loading...'
              ) : session?.user ? (
                <div className={styles.layoutHeaderSidebarPlateDetailParentMediaQuery}>
                
                <Sidebar className={styles.layoutHeaderSidebarMediaQuery}>
  <Menu className={styles.layoutHeaderMenu}>
    <SubMenu label={session.user.name} className={styles.layoutHeaderSubMenu}>
      <MenuItem className={styles.layoutHeaderMenuItem}><Link className={styles.layoutSidebarLink} href="/menu">menu</Link>  </MenuItem>
    <MenuItem className={styles.layoutHeaderMenuItem}> <Link className={styles.layoutSidebarLink} href="/cart">cart</Link> </MenuItem>
    {session.user.isAdmin &&<MenuItem className={styles.layoutHeaderMenuItem}> <Link className={styles.layoutSidebarLink} href="/dashboard">dashboard</Link> </MenuItem>}
    <MenuItem className={styles.layoutHeaderMenuItem} onClick={(e) =>{ e.preventDefault() 
                signOut()}}> logOut </MenuItem>
    </SubMenu>
  </Menu>
  </Sidebar> 

  <Link className={styles.layoutHeaderCartIconLink} href="/cart"><BsCartCheck size={70} /></Link>

</div> ) : (
               <div>
              <Link href="/Login" className={styles.layoutLoginLink}>
              <diva >login</diva>
              </Link>

              <Link href="/Signup" className={styles.layoutLoginLink}>
              <div>SignUp</div>
              </Link>
              </div>
              )}
   </div>
 
       

        <div className={Style.dashboardPageBody}>
          <DashboardComponent />
          </div>

        <div className={Style.dashboardPageTableParent}>
        <table border="1" className={Style.DashboardPageTable}>
          <caption className={Style.dashboardPageTableTitle}>orders</caption>
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

      <div className={Style.dashboardPageFooter}>kkk</div>

    </div>
  )
}
/*
export async function getServerSideProps(){
  await mongoose.connect(process.env.MONGODB_URI)
  const orders = await Order.find().lean()

  return {props: {order: orders.map(db.convertDocToObj),}}
}*/

export default dynamic(() => Promise.resolve(Dashboard), { ssr: false });

//export default Dashboard
