import React, {useRef, useState} from 'react'
//import dynamic from "next/dynamic"
import Styles from "../styles/Home.module.css"
import { useIntersection } from '@mantine/hooks'
import dynamic from 'next/dynamic'
import CountUp from "react-countup"
import ScrollTrigger from 'react-scroll-trigger'

function Review() {
  const containerRef = useRef()
  const {ref, entry} = useIntersection({
    root: containerRef.current,
    threshold: 1,
  })

  const [startCount, setStartCount] = useState(false)

/*
   dynamic(()=>{
    if(window.scrollY >= 50){
        alert("reached")
    }
   },
   {ssr: false}
   )*/

  
   /*
     function x(v){
    let goal = v.dataset.numm
    let spanid = document.getElementById("spanid")
  
    let count = setInterval(() => {
      spanid.textContent++

      if(spanid.innerHTML >= goal){
        clearInterval(count)
      }

    },100);  
  }
x(document.getElementById("spanid"))*/
  
  //let setIn = setInterval(x, 2000)
  

  return (
   
    <div className={Styles.Review} ref={containerRef}>
      <div ref={ref}>
        <span className={Styles.spann}>{entry?.isIntersecting ? "jjjjj" : "x(0)"}</span>
      </div>
        <p className={Styles.ReviewTitle}>About Our Restaurant</p>
        <div className={Styles.ReviewItemsParent}>
        <div className={Styles.ReviewItems} ref={ref}>
           <p className={Styles.ItemTitle}>clients</p>
           <div className={Styles.reviewItemsNumber} data-num={300}>Over: <span id="spanid" className={Styles.spann2} data-numm="300">{startCount && <CountUp start={0} end={200} duration={5} />}</span></div>
        </div>
        <div className={Styles.ReviewItems}>
            <p className={Styles.ItemTitle}>dishes</p>
            <div className={Styles.reviewItemsNumber} data-num={30}>Over: 30 </div>
        </div>
        <div className={Styles.ReviewItems}>
           <p className={Styles.ItemTitle}>testimonial</p>
           <div className={Styles.reviewItemsNumber} data-num={200}>Over: 200</div>
        </div>
        </div>
  
     <ScrollTrigger onEnter={(() => setStartCount(true))} onExit={(() => setStartCount(false))}>
    
    </ScrollTrigger>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Review), { ssr: false });