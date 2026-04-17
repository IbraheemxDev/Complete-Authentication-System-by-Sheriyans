import {User} from "../models/user.model.js"

 export const register =async (req,res)=> {

    const {username,email,password}=req.body
    if(
        [username,email,password].some((field)=>field?.trim()==="")
    ){
        return res.status(400).json({message:"All fields are required"})
    }
    const isAlreadyRegistered= await User.findOne(
       { $or:[{username},{email}]}
    )

    if(isAlreadyRegistered){
        return res.status(409).json({
            message:"Username or email already registered"
        })
    }

    const user=await User.create({
        username,
        email,
        password
    })
    const userCreated=await User.findById(user._id).select("-password")
    if(!userCreated){
        return res.status(409).json({
            message:"something wrong while registering user "
        })
    }
    return res.status(200).json({message:"User created Succesfully",
        data:userCreated
    })
}
 
