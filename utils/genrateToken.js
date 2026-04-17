import jwt from "jsonwebtoken"
import { User } from "../src/models/user.model"

export const genrateAccessAndRefreshToken=async(userId)=>{
    try {
     const user=await User.findById(userId)
    if(!user){
    throw new Error("User not found");
    }

    const accessToken=user.genrateAccessToken();
    const refreshToken=user.genrateRefreshToken();
    user.refreshToken=refreshToken;
    await user.save({ validateBeforeSave: false })
    return {accessToken,refreshToken}    
    } catch (error) {
throw new Error("Something went wrong while generating tokens");    }
   

}