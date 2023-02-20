import React, {useState} from 'react'
import Style from "../styles/Home.module.css"
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import {TiDeleteOutline} from "react-icons/ti";
import { deleteSlice } from '../store/addToCartSlice';
import Modal from "react-modal";


function PlaceOrder({items}) {
  const [openModal, setOpenModal] = useState(false)
  const [imageModal, setImageModal] = useState()

  const addCart = useSelector((state) => state.carts.cartItems)
 
  const dispatch = useDispatch()
  
  const deleteCartSlice = (id) => {
    dispatch(deleteSlice(id))
   
  } 

  const imageModalHandler = (ImageSrc) => {
    setOpenModal(true)
    setImageModal(ImageSrc)
  }

  return (
    <div className={Style.placeOrderComponent}>
     <div className={Style.placeOrderComponentTitle}>place order</div>

        <div className={Style.placeOrderComponentParent}>

     <div className={Style.placeOrderComponentInfo}>
      
      
        {items.homeRadio ?
        <div>
          <div className={Style.placeOrderComponentItemsTitls}>order info</div>
         <ul className={Style.placeOrderComponentInfoUl}>
         <li>order type: home</li> 
         <li>name: {items.username}</li>
         <li>email: {items.email}</li>
         <li>phone: {items.phone}</li>
         <li>address: {items.address}</li>
         <li>payment method: {items.paymentMethod} </li>
         </ul>
         </div>
        : 
        <div>
       <div className={Style.placeOrderComponentItemsTitls}>order info</div>
        <ul className={Style.placeOrderComponentInfoUl}>
        <li>order type: restaurant</li>  
         <li>name: {items.username}</li>
         <li>email: {items.email}</li>
         <li>phone: {items.phone}</li>
         <li>time: {items.time}</li>
         <li>for: {items.howMany} people</li>
        </ul>
        </div>
        }
        
        
      
    </div>

 

    <div className={Style.placeOrderComponentItems}>
      <div className={Style.placeOrderComponentItemsTitls}>plates list</div>
         {addCart && addCart.map(item => (
          <div key={item.id}>
            <ul className={Style.placeOrderComponentItemsUl}>
              <li className={Style.placeOrderComponentImageLi}><Image src={item.image} alt={item.name} width={40} height={40} className={Style.placeOrderComponentItemsImage} onClick={() => imageModalHandler(item.image)}></Image></li>
              <li className={Style.placeOrderComponentImageLiMediaQuery}><Image src={item.image} alt={item.name} width={60} height={60} className={Style.placeOrderComponentItemsImage} onClick={() => imageModalHandler(item.image)}></Image></li>
              <li>{item.name}</li>
              <li>${item.price}</li> 
              <li>{item.quantity}</li>
              <li onClick={() => deleteCartSlice(item.id)} ><TiDeleteOutline className={Style.placeOrderComponentDeleteIcon} color="red" size='30px' /><TiDeleteOutline className={Style.placeOrderComponentDeleteIconMediaQuery} color="red" size='70px' /></li>
            </ul>
          </div>
         ))}
    </div>

    </div>

    <Modal isOpen={openModal}   onRequestClose={() => setOpenModal(false)} style={{overlay: {backgroundColor: 'silver', }, content: {backgroundColor: "transparent",color: "red", width: 800, height: 800, marginLeft: 400}}}>
     
     <div className={Style.componentCartModal} ><Image src={imageModal}  alt="modal image" width={500} height={500} ></Image>
     <div className={Style.componentCartModalIcon} onClick={() => setOpenModal(false)}><TiDeleteOutline size='70px'/></div>
     </div>
     
    </Modal>
  
    </div>
  )
}

export default PlaceOrder
