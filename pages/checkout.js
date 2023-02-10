import React from 'react'
import Styles from "../styles/Home.module.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Checkout from "../components/Checkout"

function checkout() {
  
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={Styles.pagesCheckoutBody}>
      <Checkout />
      </div>
    
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default checkout