import express from "express"; 
import {user} from "../controllers/userController"; 

const router = express.Router()

router.get('/user', user)

export default router; 