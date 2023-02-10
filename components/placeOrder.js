import React from 'react'
import Style from "../styles/Home.module.css"
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import {TiDeleteOutline} from "react-icons/ti";
import { deleteSlice } from '../store/addToCartSlice';



function placeOrder({items}) {
  const addCart = useSelector((state) => state.carts.cartItems)
 
  const dispatch = useDispatch()
  
  const deleteCartSlice = (id) => {
    dispatch(deleteSlice(id))
   
  }

  return (
    <div className={Style.placeOrderComponent}>
     <div className={Style.placeOrderComponentTitle}>place order</div>

        <div className={Style.placeOrderComponentParent}>

     <div className={Style.placeOrderComponentInfo}>
      
      
        {items.homeRadio ?
         <ul className={Style.placeOrderComponentInfoUl}>
         <li>order type: home</li> 
         <li>name: {items.username}</li>
         <li>email: {items.email}</li>
         <li>phone: {items.phone}</li>
         <li>address: {items.address}</li>
         <li>payment method: {items.paymentMethod} </li>
         </ul>
        : 
        <ul className={Style.placeOrderComponentInfoUl}>
        <li>order type: restaurant</li>  
         <li>name: {items.username}</li>
         <li>email: {items.email}</li>
         <li>phone: {items.phone}</li>
         <li>time: {items.time}</li>
         <li>for: {items.howMany} people</li>
        </ul>
        }
        
        
      
    </div>

 

    <div className={Style.placeOrderComponentItems}>
      <div className={Style.placeOrderComponentItemsTitls}>plates</div>
         {addCart && addCart.map(item => (
          <div key={item.id}>
            <ul className={Style.placeOrderComponentItemsUl}>
              <li><Image src={item.image} alt={item.name} width={40} height={40} className={Style.placeOrderComponentItemsImage}></Image></li>
              <li>{item.name}</li>
              <li>${item.price}</li> 
              <li>{item.quantity}</li>
              <li onClick={() => deleteCartSlice(item.id)} ><TiDeleteOutline color="red" size='30px' /></li>
            </ul>
          </div>
         ))}
    </div>

    </div>
  
    </div>
  )
}

export default placeOrder

/*
 <li>nuru, </li>
        <li>nuru@gmail.com, </li>
        <li>addis ababa, </li>
        <li>0912121212</li>
        */

        /*

           <div className={Style.placeOrderComponentPaymentMethod}>
        <div>payment method: {items.paymentMethod}</div>
    </div>
    */