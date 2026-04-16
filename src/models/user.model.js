import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const userSchema= new Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        unique:[true,"Username must be unique"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email must be unique"]
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },
    refreshToken:{
        type:String
    }
},{timestamps:true})
export const User=mongoose.model("User",userSchema)

userSchema.pre("save",async function(){
    if(!this.isModified("password")) return 
    this.password = await bcrypt.hash(this.password, 10);
})

userSchema.methods.genrateAccessTokenfunction =(){
    return jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username
    },process.env.ACCESS_SECRET,{
        expiresIn:"15m"
    }
)}
userSchema.methods.genrateRefreshToken=function (){
    return jwt.sign({
        _id:this._id,
       
    },process.env.REFRESH_SECRET,{
        expiresIn:"1d"
    }
)}