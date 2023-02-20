import React from 'react'
import Link from "next/link"
import {BsCartCheck} from "react-icons/bs"
import styles from "../styles/Home.module.css"
import { signOut, useSession } from "next-auth/react"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';




function Header() {
  const { data: session, status } = useSession()

  
  return (
    <div className={styles.independentHeader}> 
        <nav>
          
          <div className={styles.headerItemParent}>
            <div className={styles.firstItemParent}>
            <Link href="/" className={styles.logo}>
            <diva className={styles.LinkTextDecorationNone}>logo <span className={styles.hiddenText}>or name of restaurant</span></diva>
          </Link>
            </div>
         
            <div className={styles.middleItemParent}>
            <Link href="/services" className={styles.LinkTextDecorationNone}>
              <diva className={styles.services}>services</diva>
            </Link>

            <Link href="/login" className={styles.LinkTextDecorationNone}>
              <diva >about</diva>
            </Link>

            <Link href="/menu" className={styles.LinkTextDecorationNone}>
            <diva >menu</diva>
            </Link>

            <Link href="/cart" className={styles.LinkTextDecorationNone}>
            <diva >contact</diva>
           
            </Link>
          

            </div>

            {status === 'loading' ? (
                'Loading...'
              ) : session?.user ? (
                <div className={styles.layoutHeaderSidebarCartParent}>
                  <div className={styles.headerBsCartCheck}><BsCartCheck size={30} color="white" /></div>
      <Sidebar className={styles.layoutHeaderSidebar}>
  <Menu className={styles.layoutHeaderMenu}>
    <SubMenu label={session.user.name} className={styles.layoutHeaderSubMenu}>
      <MenuItem className={styles.layoutHeaderMenuItem}> cart </MenuItem>
    <MenuItem className={styles.layoutHeaderMenuItem}> favourite </MenuItem>
    <MenuItem className={styles.layoutHeaderMenuItem} onClick={(e) =>{ e.preventDefault() 
                signOut()}}> logOut</MenuItem>
    </SubMenu>
  </Menu>
</Sidebar> 

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
        </nav>


     
     


    </div>
  )
}

export default Header
              /*

               <div className={styles.lastItemParent}>
               <div>sign up <span className={styles.hiddenText}>, login, or user name</span></div>
               <div>
                <Link href="/cart">
                <BsCartCheck />
                </Link>
                </div>
            </div>
            */