import React, {useState} from 'react'
import Style from "../styles/Home.module.css"
import PlaceOrder from '../components/placeOrder'
import Header from '../components/Header'
import Footer from "../components/Footer"
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { placeOrderAction } from '../store/placeOrderSlice'
import { deleteAllCarts } from '../store/addToCartSlice'
import {deleteCheckoutInfo} from "../store/checkoutInfoSlice"


function placeOrder() {
  const route = useRouter()
  const checkoutInfo = useSelector((state) => state.checkoutInfo.checkoutInfoItem)

  const addCart = useSelector((state) => state.carts.cartItems)

  const placeOrderArray = useSelector((state) => state.placeOrderName.placeOrderArray)

  const total = addCart.reduce((acc, val) => acc += val.amount * val.price, 0)
let num = 1
  const [products] = useState(addCart.map((items) => `${num++}: name: ${items.name}, price: $${items.price}, amount: ${items.amount} `))
  const [userInfo] = useState(checkoutInfo.map((user) => user))


  const dispatch = useDispatch()

 
  const placeOrderHandler = async () => {
    
  dispatch(placeOrderAction({productsInfo:`${products}`, username: `${checkoutInfo.map((item) => item.username)}`, phone: `${checkoutInfo.map((item) => item.phone)}`, email: `${checkoutInfo.map((item)=> item.email)}`, address: `${checkoutInfo.map((item)=> item.address).length > 1 ? checkoutInfo.map((item)=> item.address) : "none"}`,howMany: `${checkoutInfo.map((item)=> item.howMany).length > 1 ? checkoutInfo.map((item)=> item.howMany): 1}`, homeRadio: `${checkoutInfo.map((item)=> item.homeRadio)}`, restaurantRadio: `${checkoutInfo.map((item)=> item.restaurantRadio)}`, paymentMethod: `${checkoutInfo.map((item)=> item.paymentMethod).length > 1 ? checkoutInfo.map((item)=> item.paymentMethod) : "none"}`, time: `${checkoutInfo.map((item)=> item.time).length > 1 ? checkoutInfo.map((item)=> item.time) : "none"}` }))
   dispatch(deleteAllCarts())
   dispatch(deleteCheckoutInfo())

 
   alert(JSON.stringify(placeOrderArray))
    //  route.push("/")
  }



  return (
    <div>
        <div>
            <Header />
        </div>
        <div className={Style.placeOrderPageBody}>
        {
        checkoutInfo ? checkoutInfo.map(items => (
          <PlaceOrder items={items}  key={items.name} />
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

     
       <div>
      <div>{placeOrderArray && placeOrderArray.map((item) => <div key={item.username}>{item.username} {item.productsInfo}</div>)}</div>
    </div>
    kkkkkkkkkk
    

        </div>
  )
}

//export default placeOrder

export default dynamic(() => Promise.resolve(placeOrder), { ssr: false });

/*
  {placeOrderData && placeOrderData.map((item) => (
        <div>{item.map((i) => (
          <div>{i.map((ii) => (
            <div key={ii.id}>{ii.name}</div>
          ))}</div>
        ))}</div>
      ))}
      */

      /*

         <div>
          {placeOrderArray && placeOrderArray.map((items) => (
            <div key={items.id}>
             <div>{items.addCart.map((i) => (
              <div key={i.key}>
                <div>name: {i.name}</div>
              </div>
             ))}</div>
             <div>{items.checkoutInfo.map((checkoutInfoItems) => (
              <div key={checkoutInfoItems.iid}>
               <div>uuu: {checkoutInfoItems.username}</div>
              </div>
             ))}</div>
            </div>
            
          ))}
        </div>
        */