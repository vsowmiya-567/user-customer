import order from "../Models/order.schema.js";

export const createOrders = async(req,res)=>{
    try {
        const createOrder = await new order(req.body)
        createOrder.save()
        res.status(200).json({message:"product created",data:createOrder})
    } catch (error) {
        res.status(500).json({error:"Error for create"})
    }
}

//update order detail
export const updateOrders = async(req,res)=>{
    try {
        let updateOrder = await order.updateOne({_id:req.body.orderId},{$set:{customer:req.body.customerId}})
        res.status(200).json({message:"order updated",data:updateOrder})
    } catch (error) {
        res.status(500).json({error:"error in update order"})
    }
}