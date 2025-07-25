import {Request, Response } from "express"; 

export const user = (req: Request, res : Response) => {
    const name = req.query.name || "user"; 
    res.send(`Welcome, ${name}!`)
}