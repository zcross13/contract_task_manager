import {Request, Response } from "express"; 
import { User } from "../models/User";
// import {bcrypt} from bcrypt; 

export const signupUser = async (req: Request, res : Response) => {
    const {firstName, lastName, email, password } = req.body 

    try {
        const existingUser = await User.findOne({email})

        if (existingUser){
            res.status(400).json({message: 'A user exist with this email'})
        }

    } catch (error){
        res.status(500).json({message: 'Server error during registration'})
    }
}

export const loginUser = (req: Request, res: Response) => {
    res.send("login in user")
}

export const getUserProfile = (req: Request, res: Response)=> {
    res.send("user profile")
}