import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from "../styles/Home.module.css"
import {BsCartCheck} from "react-icons/bs"

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Amazona' : 'Amazona'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div >
        <header className={styles.header}>
          <nav >
          
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
              <Link href="/cart" className={styles.LinkTextDecorationNone}>
              <diva className="p-2">menu</diva>
              </Link>
              <Link href="/cart" className={styles.LinkTextDecorationNone}>
              <diva className="p-2">contact</diva>
              </Link>
              </div>

              <div className={styles.lastItemParent}>
                 <div>sign up <span className={styles.hiddenText}>, login, or user name</span></div>
                 <div><BsCartCheck /></div>
              </div>
             
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2022 Amazona</p>
        </footer>
      </div>
    </>
  );
}
