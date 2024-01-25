import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    
    username : String,
    place : String,
    orderdetail:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"order"
    }
})

const user = mongoose.model('user',userSchema)
export default user;