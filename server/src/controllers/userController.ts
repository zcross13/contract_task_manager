import {Request, Response } from "express"; 

export const signupUser = (req: Request, res : Response) => {
    res.send("Sign up page")
}

export const loginUser = (req: Request, res: Response) => {
    res.send("login in user")
}

export const getUserProfile = (req: Request, res: Response)=> {
    res.send("user profile")
}