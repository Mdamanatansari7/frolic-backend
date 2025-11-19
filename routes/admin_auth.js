import express from "express"
import { adminRegisterUser, registerAdmin,loginAdmin, getAdminProfile, logoutAdmin } from "../controllers/admin_controller.js";
import { protectAdmin } from "../middlewares/admin.js";


const adminRouter = express.Router();

adminRouter.post("/register/user",protectAdmin, adminRegisterUser);
adminRouter.post("/register",protectAdmin,registerAdmin); 
adminRouter.post("/login", loginAdmin);
adminRouter.get("/profile",protectAdmin, getAdminProfile);
adminRouter.post("/logout", protectAdmin,logoutAdmin)



export default adminRouter;