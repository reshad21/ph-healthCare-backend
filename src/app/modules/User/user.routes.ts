import express from 'express';
import { userController } from './user.controller';
const router = express.Router();


// router.get("/",(req:Request,res:Response)=>{
//     res.send({
//         Message: "Router is working perfectly..."
//     })
// })


router.post("/", userController.createAdmin)



export const userRoutes = router;
