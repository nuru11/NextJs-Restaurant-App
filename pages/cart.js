import React from 'react'
import Styles from "../styles/Home.module.css"
import { useSelector } from 'react-redux'
import {useRouter} from "next/router"
import Cart from "../components/Cart"
import Header from "../components/Header"
import Footer from "../components/Footer"
import dynamic from "next/dynamic"
import {useSession} from "next-auth/react"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {BsCartCheck} from "react-icons/bs"
import Link from "next/link"
import styles from "../styles/Home.module.css"

function cart() {
  const {data: session, status} = useSession()
  const addCart = useSelector((state) => state.carts.cartItems)
 const router = useRouter()

 const checkouthandler = () => { 
  router.push("/checkout")
 }
 
 const total = addCart.reduce((acc, val) => acc += val.amount * val.price, 0)

 if(status === "unauthenticated"){
  router.push("/Login")
  return;
 }

  return (
    <div className={Styles.pagesCart}>
   <div>
    <Header />
   </div>

   <div>
       
{status === 'loading' ? (
                'Loading...'
              ) : session?.user ? (
                <div className={styles.layoutHeaderSidebarPlateDetailParentMediaQuery}>
                
                <Sidebar className={styles.layoutHeaderSidebarMediaQuery}>
  <Menu className={styles.layoutHeaderMenu}>
    <SubMenu label={session.user.name} className={styles.layoutHeaderSubMenu}>
      <MenuItem className={styles.layoutHeaderMenuItem}><Link className={styles.layoutSidebarLink} href="/menu">menu</Link>  </MenuItem>
    <MenuItem className={styles.layoutHeaderMenuItem}> <Link className={styles.layoutSidebarLink} href="/cart">cart</Link> </MenuItem>
    {session.user.isAdmin &&<MenuItem className={styles.layoutHeaderMenuItem}> <Link className={styles.layoutSidebarLink} href="/Dashboard">dashboard</Link> </MenuItem>}
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
   <div className={Styles.pagesCartBody}>
    {addCart ? addCart.map((item) => (
    <Cart key={item.id} items={item} />
   )): <div>there is no plate that added to the basket</div>}

   
<div className={Styles.pagesCartCheckoutMediaQuery}>
    <div className={Styles.pagesCartCheckoutTitle}>checkout</div>
   <div className={Styles.pagesCartCheckoutTotal}>total: ${total}</div>
   <button onClick={checkouthandler} className={Styles.pagesCartCheckoutbtn}>checkout</button>
   </div>
   
   </div>
 
   
   
   <div className={Styles.pagesCartCheckout}>
    <div className={Styles.pagesCartCheckoutTitle}>checkout</div>
   <div className={Styles.pagesCartCheckoutTotal}>total: ${total}</div>
   <button onClick={checkouthandler} className={Styles.pagesCartCheckoutbtn}>checkout</button>
   </div>
   

<div className={Styles.pagesCartFooter} >
  <Footer />
</div>


    </div>
    
  )
}

export default dynamic(() => Promise.resolve(cart), { ssr: false });