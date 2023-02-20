import React from 'react'
import Styles from "../styles/Home.module.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import CheckoutComponent from "../components/Checkout"
import styles from "../styles/Home.module.css"
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