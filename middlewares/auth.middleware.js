import jwt from "jsonwebtoken"

const verifyJWT=async(req,res,next)=>{
    const token= req.cookies.access
}