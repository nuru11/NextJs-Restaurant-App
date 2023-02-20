import React from 'react'
import Menu from "../../components/Menu"
import data from "../../data/data"
import Layout from "../../components/Layout"
//import Background from "../../components/Background-img"
import MenuBackgroun from "../../components/MenuBackgroun-img"
import Style from "../../styles/Home.module.css"

function menu() {
 
  return (
    <div className={Style.menuPageParent}>
      <Layout>
        <MenuBackgroun />
        <div className={Style.pageMenu}>
     {
      data.plates.map((plate)=>(
        <Menu plateData={plate} key={plate.id}  />
      ))
     } 
     </div>

   
      </Layout>
    
    
    </div>
  )
}

export default menu
