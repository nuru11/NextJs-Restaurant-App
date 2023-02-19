import mongoose from "mongoose" 
import User from "../../../utils/models/userModel"
import bcrypt from 'bcryptjs';

 async function handler(req, res){
    if (req.method !== 'POST') {
        const { name, email, password } = req.body;
        console.log("nnnname: " + name + email + password)

    res.send("pppppost")
        return;
      }
      const { name, email, password } = req.body;

      console.log("nnnname: " + name + email )

      await mongoose.connect(process.env.MONGODB_URI)
         
           await User.create({name, email, password: bcrypt.hashSync(password)})
           await mongoose.disconnect(process.env.MONGODB_URI)

    return res.send("successfully added")
    
    /*  if (
        !name ||
        !email ||
        !email.includes('@') ||
        !password ||
        password.trim().length < 5
      ) {
        res.status(422).json({
          message: 'Validation error',
        });
        return;
      }*/
 }

 export default handler;

