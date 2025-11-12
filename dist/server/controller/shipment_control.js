"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalReceipiant = exports.totalsenders = exports.count_shipment_Transit = exports.count_shipment_delivered = void 0;
const shipments_1 = require("../models/shipments");
const count_shipment_delivered = async () => {
    try {
        const transit_count = await shipments_1.shipment_model.countDocuments({ status: "Delivered" });
        return transit_count;
    }
    catch (error) {
        console.log("error fetching total shipment delivered", error);
    }
};
exports.count_shipment_delivered = count_shipment_delivered;
const count_shipment_Transit = async () => {
    try {
        const delivered_count = await shipments_1.shipment_model.countDocuments({ status: "On Transit" });
        return delivered_count;
    }
    catch (error) {
        console.log("error fetching total shipment Transit", error);
    }
};
exports.count_shipment_Transit = count_shipment_Transit;
const totalsenders = async () => {
    try {
        const total_sender = await shipments_1.shipment_model.distinct("senderName", { senderName: { $exists: true, $ne: "" } });
        return total_sender.length;
    }
    catch (error) {
        console.log("error fetching total Sender", error);
    }
};
exports.totalsenders = totalsenders;
const totalReceipiant = async () => {
    try {
        const total_receiver = await shipments_1.shipment_model.distinct("receiverName", { receiverName: { $exists: true, $ne: "" } });
        return total_receiver.length;
    }
    catch (error) {
        console.log("error fetching total Sender", error);
    }
};
exports.totalReceipiant = totalReceipiant;
