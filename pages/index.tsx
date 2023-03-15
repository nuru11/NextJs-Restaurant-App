import Layout from '../components/Layout';
import BackgroundImg from '../components/Background-img';
//import PopularPlate from "../components/Popular-plates"
import Review from "../components/Review"
import PopularFood from "../components/Popular-food"
import About from "../components/About"
import Style from "../styles/Home.module.css"


export default function Home() {
  return ( 
    
    <div className={Style.home}>
     <Layout title="Home Page">
     <BackgroundImg title="background" />
    {/* <PopularPlate />*/}
    
     <About />
     <PopularFood />
     <Review />
     </Layout>
     </div>
     
    
 
   )
}

