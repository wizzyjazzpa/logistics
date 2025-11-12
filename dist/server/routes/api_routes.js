"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_controller_1 = require("../controller/api_controller");
const router = (0, express_1.default)();
router.post('/admin_login', api_controller_1.Login);
router.post('/adminRegister', api_controller_1.RegisterAdmin);
router.post('/createShipment', api_controller_1.createShipment);
router.post('/delete_single_shipment_history/:trackID', api_controller_1.delete_single_shipment_history);
router.post('/update_single_shipment', api_controller_1.updateShipment);
exports.default = router;
