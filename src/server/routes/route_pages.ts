import Router from "express";
import {home, about, services,contact,  Admin_home, Login, AdminRegister, logout,createShipment,edit_shipment} from "../controller/controlpages";
import { authMiddleware } from "../middlewares/authMiddleWare";

const router = Router();


router.get("/",home);
router.get("/about",about);
router.get("/services",services);
router.get("/contact",contact);

//Admin 
 router.get('/adminRegister',AdminRegister);
 router.get('/Admin_login',Login);
 router.get('/home',authMiddleware,Admin_home); 
 router.get('/createShipment',authMiddleware,createShipment)
 router.get('/updateShipment',authMiddleware,edit_shipment)
 router.get('/logout',logout);


export default router;
