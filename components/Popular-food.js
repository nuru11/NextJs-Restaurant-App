import React from 'react'
import Styles from "../styles/Home.module.css"
import data from "../data/data"
import { addToCart } from '../store/addToCartSlice'
import {  useDispatch } from 'react-redux'
import {ToastContainer} from "react-toastify"
import Image from 'next/image'



function PopularFood() {
 
    const dispatch = useDispatch()
    const addToCartHandler = (cart) => {
       dispatch(addToCart(cart))
    }
    
    return (
    <div className={Styles.popularFoodComponent}>
        
        <div className={Styles.popularFoodComponentTitle}>Popular food</div>
        <div className={Styles.popularFoodComponentParent}>
         
        <div className={Styles.popularFoodComponentItemsParent} >
        <a href={`/menu/${data.plates[0].id}`} className={Styles.popularFoodComponentLink}>
            <div className={Styles.popularFoodComponentImageParent}>
        <Image className={Styles.popularFoodComponentImage} src={data.plates[0].image} alt={data.plates[0].name} width={90} height={90} />
            </div>
            </a>
            <ul className={Styles.popularFoodComponentItemsUl}>
                <li>{data.plates[0].name}</li>
                <li>${data.plates[0].price}</li>
                <li>{data.plates[0].rating}</li>
                <li>{data.plates[0].description}</li>
                <li><button className={Styles.popularFoodComponentItemsButton} onClick={() => addToCartHandler(data.plates[0])}>add</button></li>
            </ul>
        </div>
      
       
        <div className={Styles.popularFoodComponentItemsParent}>
        <a href={`/menu/${data.plates[1].id}`} className={Styles.popularFoodComponentLink} >

            <div className={Styles.popularFoodComponentImageParent}>
        <Image className={Styles.popularFoodComponentImage} src={data.plates[1].image} alt={data.plates[1].name} width={90} height={90} />
            </div>
            </a>
            <ul className={Styles.popularFoodComponentItemsUl}>
                <li>{data.plates[1].name}</li>
                <li>{data.plates[1].price}</li>
                <li>{data.plates[1].rating}</li>
                <li>{data.plates[1].description}</li>
                <li><button className={Styles.popularFoodComponentItemsButton} onClick={() => addToCartHandler(data.plates[1])}>add</button></li>
            </ul>
        </div>
        
        <div className={Styles.popularFoodComponentItemsParent}>
        <a href={`/menu/${data.plates[2].id}`} className={Styles.popularFoodComponentLink} >
            <div className={Styles.popularFoodComponentImageParent}>
        <Image className={Styles.popularFoodComponentImage} src={data.plates[2].image} alt={data.plates[2].name} width={90} height={90} />
            </div>
            </a>
            <ul className={Styles.popularFoodComponentItemsUl}>
                <li>{data.plates[2].name}</li>
                <li>{data.plates[2].price}</li>
                <li>{data.plates[2].rating}</li>
                <li>{data.plates[2].description}</li>
                <li ><button className={Styles.popularFoodComponentItemsButton} onClick={() => addToCartHandler(data.plates[2])}>add</button></li>
            </ul>
        </div>
           <ToastContainer />
        </div>
    </div>
  )
}

export default PopularFood

/*
            <Image src={data.plates[0].image} alt={data.plates[0].name} width={40} height={40}></Image>
images/food1.jpg
            */