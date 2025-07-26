import {Request, Response } from "express"; 
import { User } from "../models/User";

export const signupUser = async (req: Request, res : Response) => {
    try {
        const {firstName, lastName, email, password} = req.body; 
        const user = new User({firstName, lastName, email, password}); 
        await user.save()
        res.status(201).json({message: "User created successfully", user})
    } catch(error) {
        console.error("Signup error", error); 
        res.status(500).json({error: "Failed to create user"})
    }
}

export const loginUser = (req: Request, res: Response) => {
    res.send("login in user")
}

export const getUserProfile = (req: Request, res: Response)=> {
    res.send("user profile")
}