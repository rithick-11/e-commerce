import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

import adminRouter from "./Routes/Admin.js"
import userRouter from "./Routes/users.js"

dotenv.config()

const app = express()

const startSeverAndCoonetDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected success fully")
        app.listen(process.env.PORT , () => {
            console.log(`server is running at http://localhost:${process.env.PORT}`)
        })
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

app.use(express.json())
app.use(cors())

app.use("/admin", adminRouter)
app.use("/users", userRouter)



startSeverAndCoonetDb()