import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    userid : String,
    productname : String,
    orderdetail : String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    customer:{
        type:String
    }
})

const order = mongoose.model('order',orderSchema)
export default order;