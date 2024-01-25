import user from "../Models/user.schema.js";
// create user
export const createUsers = async(req,res)=>{
    try {
        const createUser = await new user(req.body)
        createUser.save()
        res.status(200).json({message:`user ${createUser.username} created`,data:createUser})
    } catch (error) {
        res.status(500).json({error:"Error for create"})
    }
}

// get user
export const getUsers = async(req,res)=>{
    try {
        const getUser = await user.find()
        res.status(200).json({message:"get user",data:getUser})

    } catch (error) {
        res.status(500).json({error:"Error for create"})
    }
}

// update
export const updateUsers = async(req,res)=>{
    try {
        
        const updateUser = await user.updateOne({_id:req.body.userId},{$set:{orderdetail:req.body.orderdetail}})
        updateUser.save()
        res.status(200).json({message:`user updated`,data:updateUser})
    } catch (error) {
        res.status(500).json({error:"Error for create"})
    }
}

