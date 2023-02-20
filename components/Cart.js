import React, {useState} from 'react'
import Styles from "../styles/Home.module.css"
import Image from "next/image"
import {TiDeleteOutline} from "react-icons/ti";
import { useDispatch } from 'react-redux';
import { deleteSlice } from '../store/addToCartSlice';
import {ToastContainer} from "react-toastify"
import Modal from "react-modal"
//import { useSession } from "next-auth/react"
/*import styles from "../styles/Home.module.css"
import Link from "next/link"**/




function Cart({items}) {
//  const { data: session, status } = useSession()

  const [openModal, setOpenModal] = useState(false)

const dispatch = useDispatch()

  const deleteCartSlice = (id) => {
    dispatch(deleteSlice(id))
   
  }
 
  return ( 
    <>
   <div className={Styles.componentCart}>
   <ul className={Styles.componentCartUl}>
    <li className={Styles.componentCartImageParentLi} ><Image src={items.image} alt={items.name} width={60} height={60} className={Styles.componentCartLiImage} onClick={() => setOpenModal(true)}></Image></li>
    <li className={Styles.componentCartImageParentLiMediaQuery} ><Image src={items.image} alt={items.name} width={200} height={200} className={Styles.componentCartLiImage} onClick={() => setOpenModal(true)}></Image></li>
    <li className={Styles.componentCartulText} > {items.name}</li>
    <li className={Styles.componentCartulText} > ${items.price}</li>
    <li className={Styles.componentCartulText} > {items.amount}</li>
    <li className={Styles.componentCartulText} onClick={() => deleteCartSlice(items.id)} ><TiDeleteOutline className={Styles.componentCartDeleteIcon} color="red" size='30px' /> <TiDeleteOutline className={Styles.componentCartDeleteIconMediaQuery} color="red" size='90px' /></li>
   </ul>
    </div>


 

    <ToastContainer />

    <Modal isOpen={openModal}   onRequestClose={() => setOpenModal(false)} style={{overlay: {backgroundColor: 'silver', }, content: {backgroundColor: "transparent",color: "red", width: 800, height: 800, marginLeft: 400}}}>
     
     <div className={Styles.componentCartModal} ><Image src={items.image}  alt={items.name} width={500} height={500}   ></Image>
     <div className={Styles.componentCartModalIcon} onClick={() => setOpenModal(false)}><TiDeleteOutline size='70px'/></div>
     </div>
     
    </Modal>
   </>
  )
}

export default Cart
