import express from "express"
import { getAllContacts ,getmessagesByUserId,sendmessage,getChatPartners} from "../controllers/message.controller.js";
import { protectedRoute  } from '../middlewares/auth.middleware.js'

import { arcjetProtection } from '../middlewares/arcjet.middleware.js';



const router = express.Router();
router.use(arcjetProtection ,protectedRoute);

router.get("/contacts",getAllContacts);
router.get("/chats" , getChatPartners);
 router.get("/:id",getmessagesByUserId);

 router.post("/send/:id",sendmessage);  


export default router;