import express from 'express'
import { signup,login,logout,updateProfile } from '../controllers/auth.controller.js'
import { protectedRoute } from '../middlewares/auth.middleware.js'
import upload from "../config/multer.js";
import { arcjetProtection } from '../middlewares/arcjet.middleware.js';

const router = express.Router();
router.use(arcjetProtection)

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)


router.put("/update-profile",protectedRoute , upload.single("profilePic"), updateProfile)

router.get("/check",protectedRoute,(req,res)=>{
    res.status(200).json({message:"You are authenticated",user:req.user})
})
export default router;
