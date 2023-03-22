import React, { useState} from 'react'
import Styles from "../styles/Home.module.css"
import dynamic from 'next/dynamic'
import CountUp from "react-countup"
import ScrollTrigger from 'react-scroll-trigger'
import {TbTruckDelivery} from "react-icons/tb"
import {BiDish} from "react-icons/bi"
import {MdPersonOutline} from "react-icons/md"
import {AiOutlineStar} from "react-icons/ai"

function Review() {
   const [startCount, setStartCount] = useState(false)

  return (
   
    <div className={Styles.Review}>
     
        <p className={Styles.ReviewTitle} data-testid="ReviewTitle">About Our Restaurant</p>

        <div className={Styles.ReviewItemsParent}>

        <div className={Styles.ReviewItems} >
           <p className={Styles.ItemTitle}> Male Delivered</p>
           <div className={Styles.reviewItemsNumber} ><div className={Styles.reviewItemsNumberIcons} ><TbTruckDelivery className={Styles.reviewItemsIcons} size={17} color="gold" /><TbTruckDelivery className={Styles.reviewItemsIconsMediaQuery} size={80} color="gold" /></div>{startCount ? <CountUp start={0} end={430} duration={3}/>: 0} </div>
        </div>

        <div className={Styles.ReviewItems}>
            <p className={Styles.ItemTitle}>Dishes</p>
            <div className={Styles.reviewItemsNumber} ><div className={Styles.reviewItemsNumberIcons} ><BiDish className={Styles.reviewItemsIcons} size={17} color="gold" /><BiDish className={Styles.reviewItemsIconsMediaQuery} size={80} color="gold" /></div>{startCount ? <CountUp start={0} end={30} duration={3}/> : 0} </div>
        </div>

        <div className={Styles.ReviewItems}>
           <p className={Styles.ItemTitle}>Customers</p>
           <div className={Styles.reviewItemsNumber}><div className={Styles.reviewItemsNumberIcons} ><MdPersonOutline className={Styles.reviewItemsIcons} size={17} color="gold" /><MdPersonOutline className={Styles.reviewItemsIconsMediaQuery} size={80} color="gold" /></div>{startCount ? <CountUp start={0} end={350} duration={3}/> : 0}</div>
        </div>

        <div className={Styles.ReviewItems}>
           <p className={Styles.ItemTitle}>five star</p>
           <div className={Styles.reviewItemsNumber}><div className={Styles.reviewItemsNumberIcons} ><AiOutlineStar className={Styles.reviewItemsIcons} size={17} color="gold"/><AiOutlineStar className={Styles.reviewItemsIconsMediaQuery} size={80} color="gold" /></div>{startCount ? <CountUp start={0} end={550} duration={3}/> : 0}</div>
        </div>

        </div>
  
     <ScrollTrigger onEnter={(() => setStartCount(true))} onExit={(() => setStartCount(false))}>
    
    </ScrollTrigger>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Review), { ssr: false });