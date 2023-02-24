import React from 'react'
import Styles from "../styles/Home.module.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SideNa from '../components/SideNav'
import CheckoutComponent from "../components/Checkout"
//import styles from "../styles/Home.module.css"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {BsCartCheck} from "react-icons/bs"
import {useSession, signOut} from "next-auth/react"
import Link from "next/link"

function Checkout() {
  
  const {data: session, status} = useSession()
  

  return (
    <div> 
      <div className={Styles.checkoutPageHeader}>
        <Header />
      </div>

      <div className={Styles.checkoutComponentDropdownMediaQuery}>

          
{status === 'loading' ? (
                'Loading...'
              ) : session?.user ? (
                <div className={Styles.layoutHeaderSidebarPlateDetailParentMediaQuery}>

                  <div><SideNa /></div>
                
                <Sidebar className={Styles.layoutHeaderSidebarMediaQuery}>
  <Menu className={Styles.layoutHeaderMenu}>
    <SubMenu label={session.user.name} className={Styles.layoutHeaderSubMenu}>
      <MenuItem className={Styles.layoutHeaderMenuItem}><Link className={Styles.layoutSidebarLink} href="/menu">menu</Link>  </MenuItem>
    <MenuItem className={Styles.layoutHeaderMenuItem}> <Link className={Styles.layoutSidebarLink} href="/cart">cart</Link> </MenuItem>
    {session.user.isAdmin &&<MenuItem className={Styles.layoutHeaderMenuItem}> <Link className={Styles.layoutSidebarLink} href="/dashboard">dashboard</Link> </MenuItem>}
    <MenuItem className={Styles.layoutHeaderMenuItem} onClick={(e) =>{ e.preventDefault() 
                signOut()}}> logOut </MenuItem>
    </SubMenu>
  </Menu>
  </Sidebar> 

  <Link className={Styles.layoutHeaderCartIconLink} href="/cart"><BsCartCheck size={70} /></Link>

</div> ) : (
               <div>
              <Link href="/Login" className={Styles.layoutLoginLink}>
              <diva >login</diva>
              </Link>

              <Link href="/Signup" className={Styles.layoutLoginLink}>
              <div>SignUp</div>
              </Link>
              </div>
              )}
       </div>
      <div className={Styles.pagesCheckoutBody}>
      <CheckoutComponent />
      </div>
    
      <div className={Styles.checkoutPageFooter}>
        <Footer />
      </div>
    </div>
  )
}

export default Checkout