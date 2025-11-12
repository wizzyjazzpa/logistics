"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controlpages_1 = require("../controller/controlpages");
const authMiddleWare_1 = require("../middlewares/authMiddleWare");
const router = (0, express_1.default)();
router.get("/", controlpages_1.home);
router.get("/about", controlpages_1.about);
router.get("/services", controlpages_1.services);
router.get("/contact", controlpages_1.contact);
router.get('/tracking', controlpages_1.tracking);
//Admin 
router.get('/adminRegister', controlpages_1.AdminRegister);
router.get('/Admin_login', controlpages_1.Login);
router.get('/home', authMiddleWare_1.authMiddleware, controlpages_1.Admin_home);
router.get('/createShipment', authMiddleWare_1.authMiddleware, controlpages_1.createShipment);
router.get('/updateShipment', authMiddleWare_1.authMiddleware, controlpages_1.edit_shipment);
router.get('/logout', controlpages_1.logout);
exports.default = router;
