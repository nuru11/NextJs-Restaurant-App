import order from "../../utils/models/orderModel"
import mongoose from "mongoose"

const handler = async (req, res) => {

    const orderInfo = req.body.placeOrderArray
    console.log("apikkkkk" + JSON.stringify(orderInfo))
   
  

  await mongoose.connect(process.env.MONGODB_URI);
  console.log("mongo suuuuuuu")
  await order.create(orderInfo);
  await mongoose.disconnect(); 

  
 res.send({message: "suuuuuuuuuu"})
      
              
            
};
export default handler; 
