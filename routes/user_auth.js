import express from "express"
import registerUser from "../controllers/user_controller.js";

import { upload } from "../config/cloudinary.js";
import { checkRegistration } from "../middlewares/checkRegistration.js";


const userRouter = express.Router();

userRouter.post("/register",checkRegistration, upload.single("image"), registerUser);


export default userRouter;