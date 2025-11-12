"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shipment_model = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const ShipmentSchema = new mongoose_2.Schema({
    staff: { type: String, require: true },
    senderName: { type: String, require: true },
    senderAddress: { type: String, require: true },
    senderPhone: { type: String, require: true },
    senderEmail: { type: String, require: true },
    paymentMethod: { type: String, require: true },
    productType: { type: String, require: true },
    deliveryMode: { type: String, require: true },
    shipmentInsurance: { type: String, require: true },
    status: { type: String, require: true },
    duration: { type: String, require: true },
    shipmentOrigin: { type: String, require: true },
    quantity: { type: String, require: true },
    weight: { type: String, require: true },
    costOfDelivery: { type: String, require: true },
    subtotal: { type: String, require: true },
    receiverAddress: { type: String, require: true },
    receiverName: { type: String, require: true },
    receiverphone: { type: String, require: true },
    receiveremail: { type: String, require: true },
    trackingID: { type: String, require: true },
    currentLocation: { type: String, require: true },
    currentLocationValue: { type: String, require: true },
    description: { type: String, require: true },
    created_at: { type: Date, default: Date.now }
});
exports.shipment_model = mongoose_1.default.model("Shipment", ShipmentSchema);
