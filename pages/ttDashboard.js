import React, {useState} from 'react'
import Style from "../styles/Home.module.css"
import TtDashboardComponent from '../components/TtDashboard'
import Header from "../components/Header"
import dynamic from 'next/dynamic'
import {useSession, signOut} from "next-auth/react"
import Link from "next/link"
import SideNa from '../components/SideNav'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import ScrollTrigger from 'react-scroll-trigger'

/*import mongoose from 'mongoose'
import Order from "../utils/models/orderModel"
import db from "../utils/db"*/



function TtDashboard() {
  const [hide, setHide] = useState(true)

  const {data: session, status} = useSession()

  if(status === "unauthenticated" || !session?.user.isAdmin){
    return (
      <div>
        <div>you don`t allowed to enter this page!</div>
        <div>go <Link href="/">home</Link></div>
      </div>
    )
  }

 
  return (
    <div className={Style.ttdashboardPage}>
        {<div className={Style.ttDashboardHeader}>
        <Header />
  </div>}

{hide ? <div><SideNa /></div> : <div >
               
      <Sidebar className={Style.layoutHeaderSidebar}>
  <Menu className={Style.layoutHeaderMenu}>
    <SubMenu label={session.user.name} className={Style.layoutHeaderSubMenu}>
    <MenuItem className={Style.layoutHeaderMenuItem}> <Link className={Style.layoutSidebarLink} href="/">home</Link> </MenuItem>
      <MenuItem className={Style.layoutHeaderMenuItem}> <Link className={Style.layoutSidebarLink} href="/cart">cart</Link> </MenuItem>
      <MenuItem className={Style.layoutHeaderMenuItem}> <Link className={Style.layoutSidebarLink} href="/myOrders">my orders</Link> </MenuItem>
    <MenuItem className={Style.layoutHeaderMenuItem}> <Link className={Style.layoutSidebarLink} href="favourite">favourite</Link> </MenuItem>
    <MenuItem className={Style.layoutHeaderMenuItem} onClick={(e) =>{ e.preventDefault() 
                signOut()}}> logOut </MenuItem>
    </SubMenu>
  </Menu>
</Sidebar> 

</div>}


<div>{hide ? "." : "."}</div>
     
 
 <ScrollTrigger onEnter={(() => setHide(true))} onExit={(() => setHide(false))}>
    
    </ScrollTrigger>

        <div className={Style.ttdashboardPageBody}>
          <TtDashboardComponent />
          </div>

         

          <div className={Style.ttdashboardPageTableParent}>
        <table border="1" className={Style.ttDashboardPageTable}>
          <caption className={Style.ttdashboardPageTableTitle}>orders</caption>
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
  )
}

export default dynamic(() => Promise.resolve(TtDashboard), { ssr: false });
