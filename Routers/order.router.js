import express from 'express'
import { createOrders,updateOrders } from '../Controllers/order.controller.js'
const router = express.Router()

router.post('/create/order',createOrders)
router.put('/update/order',updateOrders)

export default router;