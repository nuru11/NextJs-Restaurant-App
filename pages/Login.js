import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import LoginComponent from "../components/Login"
import Style from "../styles/Home.module.css"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {BsCartCheck} from "react-icons/bs"
import Link from "next/link"
//import styles from "../styles/Home.module.css"
import {useSession, signOut} from "next-auth/react"


function Login() {
  const {data: session, status} = useSession()

   
  return (
    
     <div className={Style.loginPage}>
     
      <div className={Style.loginPageHeader}>
      <Header />
      </div> 

      <div className={Style.loginPageDropdownMediaQuery}>

    
      {status === 'loading' ? (
                'Loading...'
              ) : session?.user ? (
                <div className={Style.layoutHeaderSidebarPlateDetailParentMediaQuery}>
                
                <Sidebar className={Style.layoutHeaderSidebarMediaQuery}>
  <Menu className={Style.layoutHeaderMenu}>
    <SubMenu label={session.user.name} className={Style.layoutHeaderSubMenu}>
      <MenuItem className={Style.layoutHeaderMenuItem}><Link className={Style.layoutSidebarLink} href="/menu">menu</Link>  </MenuItem>
    <MenuItem className={Style.layoutHeaderMenuItem}> <Link className={Style.layoutSidebarLink} href="/cart">cart</Link> </MenuItem>
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

      <div className={Style.loginPageBody}>
        <LoginComponent />
      </div>

      <div className={Style.loginpageFooter}></div>
        <Footer />
     </div>
    
  )
}

export default Login
