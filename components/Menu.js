import React from 'react'
import Link from "next/link"
import Image from "next/image"
import Style from "../styles/Home.module.css"
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/addToCartSlice'
import {ToastContainer} from "react-toastify"



function Menu({plateData}) {

  const dispatch = useDispatch()

 
  const addToCartHandler = (pl) => {
    dispatch(addToCart(pl))
   
  }

 
  return (
    <div className={Style.menu}>
   
        <Link href={`/menu/${plateData.id}`}  className={Style.menuMainLink}>
           <div className={Style.menuImageParent}>
            <Image src={plateData.image} alt={plateData.name} width={250} height={250}></Image>
           </div> 

           <div className={Style.menuItemsParent}>
              <div> {plateData.name}</div>
              <div> ${plateData.price}</div>
            <div> {plateData.description}</div>
            <div>{plateData.rating}</div>
          
           </div>
         </Link>
  
<button onClick={() => addToCartHandler(plateData)} className={Style.menuButton}>add to basket</button>
<ToastContainer />
    </div>
  )
}

export default Menu