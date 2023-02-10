import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        productsInfo: {type: String},
        username: {type: String, }, 
        email: {type: String, required: false},
        phone: {type: Number, required: false, default: 1},
        address: {type: String, required: false, default: "nn1"},
        payment: {type: String, required: false, default: "nn2"},
        inHome: {type: Boolean, required: false},
        inRestaurant: {type: Boolean, required: false},
        time: {type: String, required: false, default: "nn3"},
        howMany: {type: Number, required: false, default: 1},
      
       
          
    },
    {
        timestamps: true,
      }
)

const order = mongoose.models.Order || mongoose.model('Order', OrderSchema);
export default order

/*
  name: {type: String, required: true}, 
        email: {type: String, required: true},
        phone: {type: String, required: true},
        address: {type: String, required: true, default: "none"},
        payment: {type: String, required: true, default: "none"},
        inHome: {type: Boolean, required: true},
        inRestaurant: {type: Boolean, required: true},
        time: {type: String, required: true, default: "none"},
        howMany: {type: String, required: true, default: "none"},
        */