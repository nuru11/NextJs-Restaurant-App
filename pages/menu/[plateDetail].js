import React from 'react'
import {useRouter} from "next/router"
import Link from "next/link"
import Image from "next/image"
import data from "../../data/data"
import Style from "../../styles/Home.module.css"
import styles from "../../styles/Home.module.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useDispatch} from "react-redux"
import { addToCart } from "../../store/addToCartSlice"
import { signOut, useSession } from "next-auth/react"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {BsCartCheck} from "react-icons/bs"


function PlateDetail() {
  const { data: session, status } = useSession()

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
      <div className={Style.plateDetailHeader}>
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
    {session.user.isAdmin &&<MenuItem className={styles.layoutHeaderMenuItem}> <Link className={styles.layoutSidebarLink} href="/dashboard">dashboard</Link> </MenuItem>}
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

      <div className={Style.plateDetailFooter}>
      <Footer />
      </div>
     
      </div>
  )
}
}

export default PlateDetail
