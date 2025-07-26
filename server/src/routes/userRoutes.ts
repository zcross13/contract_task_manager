import express from "express"; 
import {signupUser, loginUser, getUserProfile} from "../controllers/userController"

const router = express.Router()


router.post('/signup', signupUser)
router.post('/login', loginUser)
router.get('/user', getUserProfile)

export default router; 