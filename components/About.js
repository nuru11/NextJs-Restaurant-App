import React from 'react'
import Style from "../styles/Home.module.css"

 
function About() {
  return (
    <div className={Style.aboutComponent}>
      <div className={Style.aboutComponentItemsParent}>
        <div className={Style.aboutComponentBackgroundImage} data-testid="backgroundImg"></div>
        <div className={Style.aboutComponentTextParent}>
           <div className={Style.aboutComponentTextTitle} data-testid="about-ourStory-title">our story</div>
           <div className={Style.aboutComponentText} data-testid="ourStory-text" >
           our restaurant opened on Thanksgiving Day 1990. Chef / Owner Ron Silver began baking pies and selling them to restaurants and his neighbors out of a small kitchen at the corner of Hudson and North Moore St. in Tribeca. Today, NYCs beloved restaurant and pie shop celebrates 27 years of classic, made from scratch American cooking.
           Rather than calling itself a New York institution or using the word reliable uses its headline to make a specific claim — Served every day since 1990 — that demonstrates those ideas. This captures more attention and paints a richer, more vivid picture of its history and role in the community. The rest of the description supports this by adding details to the story of its founding and explaining that even three decades later, its scratch approach to cooking remains the same.
           </div>
            </div>
      </div>
    </div>
  )
}

export default About
