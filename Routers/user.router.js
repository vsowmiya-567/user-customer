import express from 'express'
import { createUsers,updateUsers,getUsers } from '../Controllers/user.controller.js'
const router = express.Router()

router.post('/create/user',createUsers)
router.put('/update/user',updateUsers)
router.get('/get',getUsers)

export default router;