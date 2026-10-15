import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const signup = async(req,res)=>{
    try {
        const {name,email,password}=req.body

        const existEmail = await User.findOne({email})
        if(existEmail){
            return res.status(400).json({message:"Eamil Already Exists!"})
        }

        if(password.length<6){
            return res.status(400).json({message:"Password must be atleast 6 characters!"})
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const user = await User.create({
            name, password:hashedPassword, email
        })

        

    } catch (error) {
        
    }
}