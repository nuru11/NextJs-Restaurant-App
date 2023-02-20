import React from 'react'
//import { useRouter } from 'next/router';
import Header from "../components/Header"
import Footer from "../components/Footer"
import SignupComponent from '../components/SignUp';
import Styles from "../styles/Home.module.css"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {BsCartCheck} from "react-icons/bs"
import Link from "next/link"
//import styles from "../styles/Home.module.css"
import {useSession, signOut} from "next-auth/react"

function Signup() {
  const {data: session, status} = useSession()
 // const router = useRouter()



   /* if(status === "authenticated"){ 
    router.push("/")
    return
    }*/


  return (
    <div className={Styles.signupPage}>
      
      <div className={Styles.signupPageHeader}>
          <Header /> 
      </div>

      <div className={Styles.signupPageDropdownMediaQuery}>

      {status === 'loading' ? (
                'Loading...'
              ) : session?.user ? (
                <div className={Styles.layoutHeaderSidebarPlateDetailParentMediaQuery}>
                
                <Sidebar className={Styles.layoutHeaderSidebarMediaQuery}>
  <Menu className={Styles.layoutHeaderMenu}>
    <SubMenu label={session.user.name} className={Styles.layoutHeaderSubMenu}>
      <MenuItem className={Styles.layoutHeaderMenuItem}><Link className={Styles.layoutSidebarLink} href="/menu">menu</Link>  </MenuItem>
    <MenuItem className={Styles.layoutHeaderMenuItem}> <Link className={Styles.layoutSidebarLink} href="/cart">cart</Link> </MenuItem>
    {session.user.isAdmin &&<MenuItem className={Styles.layoutHeaderMenuItem}> <Link className={Styles.layoutSidebarLink} href="/Dashboard">dashboard</Link> </MenuItem>}
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

      <div className={Styles.signupPageBody}>
              <SignupComponent />
      </div>

      <div className={Styles.signupPageFooter}>
         <Footer />
      </div>
    </div>
  )
}


export default Signup