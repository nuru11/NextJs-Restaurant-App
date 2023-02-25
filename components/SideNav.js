import SideNav, { /*Toggle, Nav,*/ NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Styles from "../styles/Home.module.css"
import Link from "next/link"
import {AiOutlineHome} from "react-icons/ai"
import {MdOutlineRestaurantMenu} from "react-icons/md"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {GoSignIn} from "react-icons/go"
import {useSession} from "next-auth/react"



import React from 'react'



function SideNa() {
    const { data: session} = useSession()

  return (
    <SideNav
    className={Styles.sideNavComponent}
    style={{ backgroundColor: 'rosybrown' }}
>
    <SideNav.Toggle  />
    <SideNav.Nav defaultSelected="home" className={Styles.sideNavComponentNav} >
        <NavItem eventKey="home" className={Styles.sideNavComponentNavItems}>

        <NavIcon>
                    <Link className={Styles.sideNavComponentLinks} href="/" ><AiOutlineHome size={40} /></Link>
                </NavIcon>

            <NavText >
                
                <Link className={Styles.sideNavComponentLinks} href="/" >Home</Link>
            </NavText>
           
        </NavItem>

        <NavItem eventKey="home" className={Styles.sideNavComponentNavItems}>

               <NavIcon>
                    
                    <Link className={Styles.sideNavComponentLinks} href="/menu" ><MdOutlineRestaurantMenu size={40} /></Link>
                </NavIcon>

            <NavText className={Styles.sideNavComponentNavText} >
                <Link className={Styles.sideNavComponentLinks} href="/menu" >Menu</Link>
            </NavText>
           
        </NavItem >

        <NavItem eventKey="home" className={Styles.sideNavComponentNavItems}>

                <NavIcon>
                  
                  <Link className={Styles.sideNavComponentLinks} href="/cart" ><AiOutlineShoppingCart size={40} /></Link>
                </NavIcon>

            <NavText >
                <Link className={Styles.sideNavComponentLinks} href="/cart" >Cart</Link>
            </NavText>
           
        </NavItem>

       {!session && <NavItem eventKey="Login" className={Styles.sideNavComponentNavItems}>

<NavIcon>
  
  <Link className={Styles.sideNavComponentLinks} href="/Login" ><GoSignIn size={40} /></Link>
</NavIcon>

<NavText >
<Link className={Styles.sideNavComponentLinks} href="/Login" >Login</Link>
</NavText>

</NavItem>}

     

    </SideNav.Nav>
</SideNav>
  )
}

export default SideNa

/*
 <NavText >
                <Link className={Styles.sideNavComponentLinks} href="/menu">Menu</Link>
            </NavText>
            <NavText >
                <Link className={Styles.sideNavComponentLinks} href="/cart">Cart</Link>
            </NavText>
            <NavText >
                <Link className={Styles.sideNavComponentLinks} href="/placeOrders">Place Orders</Link>
            </NavText>
            */