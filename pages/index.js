import Layout from '../components/Layout';
import BackgroundImg from '../components/Background-img';
import PopularPlate from "../components/Popular-plates"
import Review from "../components/Review"

export default function Home() {
  return ( 
    <>
     <Layout title="Home Page">
     <BackgroundImg />
     <PopularPlate />
     <Review />
     </Layout>
     
    </>
 
   )
}
