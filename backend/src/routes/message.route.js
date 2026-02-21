import express from "express"
import { getAllContacts ,getmessagesByUserId,sendmessage,getChatPartners} from "../controllers/message.controller.js";
import { protectedRoute  } from '../middlewares/auth.middleware.js'

import { arcjetProtection } from '../middlewares/arcjet.middleware.js';
import multer from "multer";


const upload = multer({ storage: multer.memoryStorage() });


const router = express.Router();
router.use( protectedRoute);

router.get("/contacts",getAllContacts);
router.get("/chats" , getChatPartners);
 router.get("/:id",getmessagesByUserId);

 router.post("/send/:id",upload.single("image"),sendmessage);  


export default router;