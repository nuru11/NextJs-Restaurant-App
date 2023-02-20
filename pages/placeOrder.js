import React, {useState} from 'react'
import Style from "../styles/Home.module.css"
import PlaceOrderComponent from '../components/placeOrder'
import Header from '../components/Header'
import Footer from "../components/Footer"
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { placeOrderAction } from '../store/placeOrderSlice'
import { deleteAllCarts } from '../store/addToCartSlice'
import {deleteCheckoutInfo} from "../store/checkoutInfoSlice"
import { useSession, signOut } from 'next-auth/react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {BsCartCheck} from "react-icons/bs"
import styles from "../styles/Home.module.css"
import Link from "next/link"


function PlaceOrder() {

  const route = useRouter()
  const checkoutInfo = useSelector((state) => state.checkoutInfo.checkoutInfoItem)
  const addCart = useSelector((state) => state.carts.cartItems)
  //const placeOrderArray = useSelector((state) => state.placeOrderName.placeOrderArray)

  const total = addCart.reduce((acc, val) => acc += val.amount * val.price, 0)
let num = 1
  const [products] = useState(addCart.map((items) => `${num++}: name: ${items.name}, price: $${items.price}, amount: ${items.amount} `))
 
  const dispatch = useDispatch()

 
  const placeOrderHandler = async () => {
    
  dispatch(placeOrderAction({productsInfo:`${products}`, username: `${checkoutInfo.map((item) => item.username)}`, phone: `${checkoutInfo.map((item) => item.phone)}`, email: `${checkoutInfo.map((item)=> item.email)}`, address: `${checkoutInfo.map((item)=> item.address).length > 1 ? checkoutInfo.map((item)=> item.address) : "none"}`,howMany: `${checkoutInfo.map((item)=> item.howMany).length > 1 ? checkoutInfo.map((item)=> item.howMany): 1}`, homeRadio: `${checkoutInfo.map((item)=> item.homeRadio)}`, restaurantRadio: `${checkoutInfo.map((item)=> item.restaurantRadio)}`, paymentMethod: `${checkoutInfo.map((item)=> item.paymentMethod).length > 1 ? checkoutInfo.map((item)=> item.paymentMethod) : "none"}`, time: `${checkoutInfo.map((item)=> item.time).length > 1 ? checkoutInfo.map((item)=> item.time) : "none"}` }))
   dispatch(deleteAllCarts())
   dispatch(deleteCheckoutInfo())

 
  
      route.push("/")
  }


 const {data: session, status} = useSession()
/*
 if(status === "loading"){
  return <div>status loading</div>
 }

 if(status === "unauthenticated"){
   return signIn()
 }
*/

  return (
    <div className={Style.placeOrderPage}>
        <div className={Style.placeOrderPageHeader}>
            <Header />
        </div>

        <div className={Style.placePageDropdownMediaQuery}>

          
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
        <div className={Style.placeOrderPageBody}>
        {
        checkoutInfo ? checkoutInfo.map(items => (
          <PlaceOrderComponent items={items}  key={items.name} />
        )) :  <div>no item</div>
      }
        </div>
 
        
   <div className={Style.pagesPlaceOrderCheckout}>
    <div className={Style.pagesPlaceOrderCheckoutTitle}>place order</div>
   <div className={Style.pagesPlaceOrderCheckoutTotal}>total: ${total}</div>
   <button onClick={placeOrderHandler} className={Style.pagesPlaceOrderCheckoutbtn}>place order</button>
   </div>
   

        <div>
            <Footer />
        </div>

     
      

        </div>
  )
}

export default dynamic(() => Promise.resolve(PlaceOrder), { ssr: false });
