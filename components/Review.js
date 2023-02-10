import React, { useState} from 'react'
import Styles from "../styles/Home.module.css"
import dynamic from 'next/dynamic'
import CountUp from "react-countup"
import ScrollTrigger from 'react-scroll-trigger'

function Review() {
   const [startCount, setStartCount] = useState(false)

  return (
   
    <div className={Styles.Review}>
     
        <p className={Styles.ReviewTitle}>About Our Restaurant</p>
        <div className={Styles.ReviewItemsParent}>
        <div className={Styles.ReviewItems} >
           <p className={Styles.ItemTitle}>Male Delivered</p>
           <div className={Styles.reviewItemsNumber} >{startCount ? <CountUp start={0} end={430} duration={3}/>: 0} </div>
        </div>
        <div className={Styles.ReviewItems}>
            <p className={Styles.ItemTitle}>Dishes</p>
            <div className={Styles.reviewItemsNumber} >{startCount ? <CountUp start={0} end={30} duration={3}/> : 0} </div>
        </div>
        <div className={Styles.ReviewItems}>
           <p className={Styles.ItemTitle}>Customers</p>
           <div className={Styles.reviewItemsNumber}>{startCount ? <CountUp start={0} end={350} duration={3}/> : 0}</div>
        </div>
        <div className={Styles.ReviewItems}>
           <p className={Styles.ItemTitle}>five star</p>
           <div className={Styles.reviewItemsNumber}>{startCount ? <CountUp start={0} end={550} duration={3}/> : 0}</div>
        </div>
        </div>
  
     <ScrollTrigger onEnter={(() => setStartCount(true))} onExit={(() => setStartCount(false))}>
    
    </ScrollTrigger>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Review), { ssr: false });