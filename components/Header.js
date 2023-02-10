import React from 'react'
import Link from "next/link"
import {BsCartCheck} from "react-icons/bs"
import styles from "../styles/Home.module.css"

function Header() {
  return (
    <div className={styles.independentHeader}>
        <nav>
          
          <div className={styles.headerItemParent}>
            <div className={styles.firstItemParent}>
            <Link href="/" className={styles.logo}>
            <diva className={styles.LinkTextDecorationNone}>logo <span className={styles.hiddenText}>or name of restaurant</span></diva>
          </Link>
            </div>
         
            <div className={styles.middleItemParent}>
            <Link href="/services" className={styles.LinkTextDecorationNone}>
              <diva className={styles.services}>services</diva>
            </Link>
            <Link href="/login" className={styles.LinkTextDecorationNone}>
              <diva className="p-2">about us</diva>
            </Link>
            <Link href="/menu" className={styles.LinkTextDecorationNone}>
            <diva className="p-2">menu</diva>
            </Link>
            <Link href="/cart" className={styles.LinkTextDecorationNone}>
            <diva className="p-2">contact</diva>
            </Link>
            </div>

            <div className={styles.lastItemParent}>
               <div>sign up <span className={styles.hiddenText}>, login, or user name</span></div>
               <div>
                <Link href="/cart">
                <BsCartCheck />
                </Link>
                </div>
            </div>
           
          </div>
        </nav>
    </div>
  )
}

export default Header
