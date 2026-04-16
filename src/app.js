import express from "express"
// import cors from "cors"
// import cookieParser from "cookie-parser"
const app=express()


// app.use(
//   cors({
//     // origin:"*",
//     origin: "https://car-rental-client-eosin.vercel.app",
    
//      credentials: true
//   })
// );
app.use(express.json({limit:"16kb"}))  //“Client JSON data bhejega, mujhe usay read karna hai.”
app.use(express.urlencoded({extended :true,limit:"16kb"}))
app.use(express.static("public"))

//routes import
import userRouter from "./routes/user.routes.js"
app.use("/api/user",userRouter)






export {app}