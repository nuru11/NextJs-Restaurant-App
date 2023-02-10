import React from 'react'
import Styles from "../styles/Home.module.css"
import { useSelector } from 'react-redux'
import {useRouter} from "next/router"
import Cart from "../components/Cart"
import Header from "../components/Header"
import Footer from "../components/Footer"
import dynamic from "next/dynamic"

function cart() {
  const addCart = useSelector((state) => state.carts.cartItems)
 const router = useRouter()

 const checkouthandler = () => {
  router.push("/checkout")
 }
 
 const total = addCart.reduce((acc, val) => acc += val.amount * val.price, 0)
  return (
    <div className={Styles.pagesCart}>
   <div>
    <Header />
   </div>
   <div className={Styles.pagesCartBody}>
    {addCart ? addCart.map((item) => (
    <Cart key={item.id} items={item} />
   )): <div>there is no plate that added to the basket</div>}
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

//export default cart

export default dynamic(() => Promise.resolve(cart), { ssr: false });