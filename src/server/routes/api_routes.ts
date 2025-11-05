import Router from "express";
import {Login,RegisterAdmin,createShipment,delete_single_shipment_history,updateShipment} from "../controller/api_controller";

const router = Router();


router.post('/admin_login',Login)
router.post('/adminRegister',RegisterAdmin);
router.post('/createShipment',createShipment);
router.post('/delete_single_shipment_history/:trackID',delete_single_shipment_history);
router.post('/update_single_shipment',updateShipment)

export default router;