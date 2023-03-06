import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from "../styles/Home.module.css"
import {BsCartCheck} from "react-icons/bs"
import Footer from "./Footer"
import { signOut, useSession } from "next-auth/react"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import SideNa from "./SideNav"
//import {AiOutlineUnorderedList} from "react-icons/ai"




export default function Layout({ title, children }) {
 const { data: session, status } = useSession()

  return (
    <div className={styles.layout}>
      <Head>
        <title>{title ? title + ' - restaurant' : 'restaurant'}</title>
        <meta name="description" content="Restaurant Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div >

        

        <header className={styles.header}>
        <nav  className={styles.layoutHeaderNav}>
          
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
          
            <Link href="/menu" className={styles.LinkTextDecorationNone}>
            <diva >menu</diva>
            </Link>

            <Link href="/Cart" className={styles.LinkTextDecorationNone}>
            <diva >contact</diva>
            </Link>
            </div>

          
          

      {status === 'loading' ? (
                'Loading...'
              ) : session?.user ? (
                <div className={styles.layoutHeaderSidebarCartParent}>
                <BsCartCheck size={30} />
      <Sidebar className={styles.layoutHeaderSidebar}>
  <Menu className={styles.layoutHeaderMenu}>
    <SubMenu label={session.user.name} className={styles.layoutHeaderSubMenu}>
      <MenuItem className={styles.layoutHeaderMenuItem}> <Link className={styles.layoutSidebarLink} href="/cart">cart</Link> </MenuItem>
      <MenuItem className={styles.layoutHeaderMenuItem}> <Link className={styles.layoutSidebarLink} href="/myOrders">my orders</Link> </MenuItem>
      {session.user.isAdmin &&<MenuItem className={styles.layoutHeaderMenuItem}> <Link className={styles.layoutSidebarLink} href="/ttDashboard">dashboard</Link> </MenuItem>}
    <MenuItem className={styles.layoutHeaderMenuItem}> <Link className={styles.layoutSidebarLink} href="favourite">favourite</Link> </MenuItem>
    <MenuItem className={styles.layoutHeaderMenuItem} onClick={(e) =>{ e.preventDefault() 
                signOut()}}> logOut </MenuItem>
    </SubMenu>
  </Menu>
</Sidebar> 

</div> ) : (
               <div className={styles.layoutHeaderAuthentication}>
              <Link href="/Login" className={styles.layoutLoginLink}>
              <diva >login</diva>
              </Link>

              <Link href="/Signup" className={styles.layoutLoginLink}>
              <div>SignUp</div>
              </Link>
              </div>
              )}


       {/* media query */}

{status === 'loading' ? (
                'Loading...'
              ) : session?.user ? (
                <div className={styles.layoutHeaderSidebarCartParentMediaQuery}>

                <div><SideNa /></div>
                
                <Sidebar className={styles.layoutHeaderSidebarMediaQuery}>
  <Menu className={styles.layoutHeaderMenu}>
    <SubMenu label={session.user.name} className={styles.layoutHeaderSubMenu}>
      <MenuItem className={styles.layoutHeaderMenuItem}><Link className={styles.layoutSidebarLink} href="/profile">profile</Link>  </MenuItem>
    <MenuItem className={styles.layoutHeaderMenuItem}> <Link className={styles.layoutSidebarLink} href="/cart">cart</Link> </MenuItem>
    <MenuItem className={styles.layoutHeaderMenuItem}> <Link className={styles.layoutSidebarLink} href="/favourite">favourite</Link> </MenuItem>
    <MenuItem className={styles.layoutHeaderMenuItem}> <Link className={styles.layoutSidebarLink} href="/myOrders">my orders</Link> </MenuItem>
    {session.user.isAdmin &&<MenuItem className={styles.layoutHeaderMenuItem}> <Link className={styles.layoutSidebarLink} href="/Dashboard">dashboard</Link> </MenuItem>}
    <MenuItem className={styles.layoutHeaderMenuItem} onClick={(e) =>{ e.preventDefault() 
                signOut()}}> logOut </MenuItem>
    </SubMenu>
  </Menu>
  </Sidebar> 

  <Link className={styles.layoutHeaderCartIconLink} href="/cart"><BsCartCheck size={70} /></Link>

</div> ) : (
               <div className={styles.layoutHeaderAuthenticationMediaQuery}>
                  <div><SideNa /></div>
              <Link href="/Login" className={styles.layoutLoginLink}>
              <div>login</div>
              </Link>

              <Link href="/Signup" className={styles.layoutLoginLink}>
              <div>SignUp</div>
              </Link>
              </div>
              )}


             

            
           
          </div>
        </nav>

      </header>

        <main className={styles.layoutMainTag}>{children}</main>

        {/*<div className={styles.layoutBodyMediaQuery}></div>*/}
         
        <footer className={styles.layoutFooter}>
        <Footer />
        </footer>
       




      </div>

      
     

    </div>
  );
}


/*

    {  /*status !== loading &&*//*  status === "authenticated" && (<div className={styles.lastItemParent}>
               <div onClick={(e) =>{ e.preventDefault() 
                signOut()}}>signOut <span className={styles.hiddenText}>, login, or user name</span></div>
               <div><BsCartCheck /></div>
            </div>)}


            */


            /*

              { status === "unauthenticated" && (<div><div onClick={(e) => {e.preventDefault()
            signIn()}} >login</div>
            <div><BsCartCheck /></div></div>)}

            */



            /*

            
        <div className={styles.headerDropdown}>
      <div className={styles.headerDropdownIcon}  onClick={handleShowItem}><AiOutlineUnorderedList size={50} /></div>

      <div className={showItem ? styles.dropdownItemParentshow : styles.dropdownItemParentDontShow} >

      <div className={styles.headerDropdownLinkParent}><Link className={styles.headerDropdownLink} href="/Menu" >menu</Link></div>
      <div className={styles.headerDropdownLinkParent}><Link className={styles.headerDropdownLink} href="/Services" >services</Link></div>
      <div className={styles.headerDropdownLinkParent}><Link className={styles.headerDropdownLink} href="/About" >aabout</Link></div>
      <div className={styles.headerDropdownLinkParent}><Link className={styles.headerDropdownLink} href="/FindUs" >find-us</Link></div>

     </div>
     </div>

     */