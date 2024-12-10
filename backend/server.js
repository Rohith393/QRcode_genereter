import express from "express"
import router from "./route.js"
import cors from "cors"
const app=express()
app.use(express.json())
app.use(cors())
app.use(router)
app.listen(5000,()=>{
console.log("server starting at port 5000")
})
