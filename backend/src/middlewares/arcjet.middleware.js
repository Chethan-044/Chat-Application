import aj from '../lib/arcjet.js';
import {isSpoofedBot} from "@arcjet/inspect"

export const arcjetProtection = async(req,res,next)=>{
    try{
        const decision = await aj.protect(req);

        if(decision.isDenied()){
            if(decision.reason.isRateLimit()){
                return res.status(429).json({message:"Too many requests"});
            }
            else if(decision.reason.isBot()){
                return res.status(403).json({message:"Bot access denied"});
            }
            else{
                return res.status(403).json({message:"Access denied"});
            }
        }

        if(decision.results.some(isSpoofedBot)){
            return res.status(403).json({message:"Malicious bot detected"});
        }

        next(); // ⭐ IMPORTANT

    } catch(err){
        console.log("Arcjet error:", err);
        next();
    }
}