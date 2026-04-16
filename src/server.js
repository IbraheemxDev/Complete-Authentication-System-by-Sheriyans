// require('dotenv').config()
import dotenv from "dotenv"  //dotenv is liye use hota hai taake secrets secure rahen aur code production-ready ho.
import connectDB from "./db/index.js";
dotenv.config({
    path:'../.env'
})
import { app } from "./app.js"; 
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`Server is running at  port : ${process.env.PORT} `);
        
    })
})
.catch((error)=>{
    console.log("Mongo DB connetION FAILED !! ",error);
    
})









