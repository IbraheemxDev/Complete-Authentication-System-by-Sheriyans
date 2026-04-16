import jwt from "jsonwebtoken"
import { User } from "../src/models/user.model"

export const genrateAccessAndRefreshToken=async(userId)=>{
    try {
     const user=await User.findById(userId)
    if(!user){
        return res.status(400).json({message:"User not found"})
    }

    const accessToken=user.genrateAccessToken();
    const refreshToken=user.genrateRefreshToken();
    user.refreshToken=refreshToken;
    await user.save({ validateBeforeSave: false })
    return {accessToken,refreshToken}    
    } catch (error) {
        
    }
   

}