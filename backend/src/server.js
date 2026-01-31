import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import messageRoute from "./routes/message.route.js"

dotenv.config();
const app = express();


app.use("/api/auth",authRoutes)
app.use("/api/message" , messageRoute)


const PORT = process.env.PORT || 3000;
app.listen( PORT,()=>{
    console.log("Server is running on port " + PORT);
})