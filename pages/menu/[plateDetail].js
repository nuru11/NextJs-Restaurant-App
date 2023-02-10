import React from 'react'
import {useRouter} from "next/router"
import Link from "next/link"
import Image from "next/image"
import data from "../../data/data"
import Style from "../../styles/Home.module.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useDispatch} from "react-redux"
import { addToCart } from "../../store/addToCartSlice"

function plateDetail() {
 const router = useRouter()
  const {query } = useRouter()
  const {plateDetail} = query
  const plate = data.plates.find((x)=> x.id == plateDetail)


  const dispatch = useDispatch() 

  const addToCartHandler = () => {
    dispatch(addToCart(plate))
    alert(addToCart)
     alert(JSON.stringify(plate))
       router.push("/cart")
  }

  if(!plate){
    return (
      <>
      <Header/>
      <div className={Style.plateDetailNotFoundParent}>
    <div className={Style.plateDetailNotFound}>plate not found!</div>
    <Link href="/menu" className={Style.plateDetailNotFoundLink}>menu</Link>
    </div>
    <Footer />
   
    </>
    )
  }{
  return (
    <div>
      <Header />
      <div className={Style.plateDetailItemsParent}>
        <div className={Style.plateDetailImageParent}>
        <Image src={plate.image} alt={plate.name} width={640} height={640} className={Style.plateDetailImage}></Image>
        </div>
        <div className={Style.plateDetailItem}>
            <div>name: {plate.name}</div>
            <div>price: ${plate.price}</div>
            <div>rate from clients: {plate.rating}</div>
            <div className={Style.plateDetailDescription}>substance consisting essentially of protein, carbohydrate,
               fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy.</div>
               <button onClick={addToCartHandler} className={Style.plateDetailButton}>add to basket</button>
        </div>
       
       
      </div>
      <Footer />
     
      </div>
  )
}
}

export default plateDetail
