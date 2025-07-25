import {Request, Response } from "express"; 

export const contract = (req: Request , res: Response ) => {
    const contract = req.query.contract || "contract"
    res.send(`${contract}`)
}