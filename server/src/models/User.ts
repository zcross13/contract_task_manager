import { timeStamp } from "console";
import mongoose from "mongoose";

const {Schema} = mongoose

const userSchema = new Schema({
     firstName: {
        type: String,
        required: true, 
     },
     lastName: {
        type: String,
        required: true
     }, 
     email: {
        type: String , 
        require: true, 
        unique: true
     },
     password: {
        type: String, 
        require: true
     },
     contract: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Contract",
        }
    ], 
     tasks:[
        {
            type: mongoose.Types.ObjectId, 
            ref: "Task",
        },
    ],
},
    {timestamps: true}
)

export const User = mongoose.model("User", userSchema)