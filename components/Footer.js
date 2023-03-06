import React from 'react'
import Link from "next/link"
import Style from "../styles/Home.module.css"

const Footer = () => {

 
  return (
    <div className={Style.footer}>

        <div className={Style.footerItemsParent}>

          <div className={Style.footerServicesItemsParent}>
            <p className={Style.footerServicesTitle}>Services</p>
            <ul className={Style.footerItemsUl}>
              <li>Dilevr to home</li>
              <li>Branding</li>
              <li>Email marketing</li>
              <li>Offline</li>
            </ul>
          </div>

          <div className={Style.footerServicesItemsParent}>
            <p className={Style.footerServicesTitle}>About</p>
            <ul className={Style.footerItemsUl}>
              <li>Our Story</li>
              <li>Benefits</li>
              <li>Team</li>
              <li>Career</li>
            </ul>
          </div>

          <div className={Style.footerServicesItemsParent}>
            <p className={Style.footerServicesTitle}>Contact</p>
            <ul className={Style.footerItemsUl}>
              <li>Email</li>
              <li>Phone</li>
              <li>message us</li>
              <li><Link href="/ttDashboard">old</Link></li>
            </ul>
          </div>
        </div>

        <div className={Style.footerMessageUs}>
            <p className={Style.footerMessageUsTitle}>leave us a message</p>
            <input type="text" className={Style.footerMessageUsInput} placeholder="what do you thought about us" />
            <button className={Style.footerMessageUsButton}>Send</button>
          </div>

          <div className={Style.footerAuthentication}>
          <Link className={Style.footerAuthenticationLink} href="/login"><div className={Style.footerAuthenticationLogin}>Login</div></Link>
          <Link className={Style.footerAuthenticationLink} href="/signup"><div className={Style.footerAuthenticationSignup}>SignUp</div></Link>
          </div>

         
    </div>
  )
}

export default Footer