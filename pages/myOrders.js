import React from 'react'
import Style from "../styles/Home.module.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {BsCartCheck} from "react-icons/bs"
import {useSession, signOut} from "next-auth/react"
import Link from "next/link"
import dynamic from 'next/dynamic';
import SideNa from '../components/SideNav'

function MyOrders() {
  const {data: session, status} = useSession()

  return (
    <div className={Style.myOrdersPages}>

      <div className={Style.myOrdersPagesHeader}>
        <Header />
      </div>

      <div className={Style.dashboardPageDropdownMediaQuery}>
              
              {status === 'loading' ? (
                              'Loading...'
                            ) : session?.user ? (
                              <div className={Style.layoutHeaderSidebarPlateDetailParentMediaQuery}>
                              
                              <div><SideNa /></div>
              
                              <Sidebar className={Style.layoutHeaderSidebarMediaQuery}>
                <Menu className={Style.layoutHeaderMenu}>
                  <SubMenu label={session.user.name} className={Style.layoutHeaderSubMenu}>
                    <MenuItem className={Style.layoutHeaderMenuItem}><Link className={Style.layoutSidebarLink} href="/profile">profile</Link>  </MenuItem>
                  <MenuItem className={Style.layoutHeaderMenuItem}> <Link className={Style.layoutSidebarLink} href="/cart">cart</Link> </MenuItem>
                  <MenuItem className={Style.layoutHeaderMenuItem}> <Link className={Style.layoutSidebarLink} href="/favourite">favourite</Link> </MenuItem>
                  <MenuItem className={Style.layoutHeaderMenuItem}> <Link className={Style.layoutSidebarLink} href="/myOrders">my orders</Link> </MenuItem>
                  {session.user.isAdmin &&<MenuItem className={Style.layoutHeaderMenuItem}> <Link className={Style.layoutSidebarLink} href="/Dashboard">dashboard</Link> </MenuItem>}
                  <MenuItem className={Style.layoutHeaderMenuItem} onClick={(e) =>{ e.preventDefault() 
                              signOut()}}> logOut </MenuItem>
                  </SubMenu>
                </Menu>
                </Sidebar> 
              
                <Link className={Style.layoutHeaderCartIconLink} href="/cart"><BsCartCheck size={70} /></Link>
              
              </div> ) : (
                             <div>
                            <Link href="/Login" className={Style.layoutLoginLink}>
                            <diva >login</diva>
                            </Link>
              
                            <Link href="/Signup" className={Style.layoutLoginLink}>
                            <div>SignUp</div>
                            </Link>
                            </div>
                            )}
                 </div>
               

      <div className={Style.myOrdersPagesBody}>

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
        </div>

      <div className={Style.myOrdersPagesFooter}>
       <Footer />
        </div>

    </div>
  )
}

export default dynamic(() => Promise.resolve(MyOrders), { ssr: false });