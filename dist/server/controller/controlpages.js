"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.edit_shipment = exports.createShipment = exports.Admin_home = exports.Login = exports.AdminRegister = exports.tracking = exports.contact = exports.services = exports.about = exports.home = void 0;
const shipments_1 = require("../models/shipments");
const shipment_control_1 = require("./shipment_control");
const home = async (req, res) => {
    res.render("index", { title: "Home" });
};
exports.home = home;
const about = async (req, res) => {
    res.render("about", { title: "About" });
};
exports.about = about;
const services = async (req, res) => {
    res.render("services", { title: "Services" });
};
exports.services = services;
const contact = async (req, res) => {
    res.render("contact", { title: "Contact" });
};
exports.contact = contact;
const tracking = async (req, res) => {
    const trackingID = req.query.trackingID;
    const getshipments = await shipments_1.shipment_model.findOne({ trackingID: trackingID });
    res.render("tracking", { title: "tracking", getshipments });
};
exports.tracking = tracking;
//Admin
const AdminRegister = async (req, res) => {
    res.render('admin/auth-register', { title: "Admin-Register" });
};
exports.AdminRegister = AdminRegister;
const Login = async (req, res) => {
    res.render('admin/auth-login', { title: "Admin-Login" });
};
exports.Login = Login;
const Admin_home = async (req, res) => {
    const getshipments = await shipments_1.shipment_model.find();
    const count_delivered = await (0, shipment_control_1.count_shipment_delivered)();
    const count_sender = await (0, shipment_control_1.totalsenders)();
    const count_receiver = await (0, shipment_control_1.totalReceipiant)();
    const count_transit = await (0, shipment_control_1.count_shipment_Transit)();
    res.render('admin/index', {
        title: "Admin-Home", user: req.user,
        getshipments,
        count_delivered,
        count_sender,
        count_transit,
        count_receiver
    });
};
exports.Admin_home = Admin_home;
const createShipment = async (req, res) => {
    res.render("admin/create_shipment", { title: "Shipment", user: req.user });
};
exports.createShipment = createShipment;
const edit_shipment = async (req, res) => {
    const id = req.query.id;
    const get_shipment = await shipments_1.shipment_model.findOne({ trackingID: id });
    res.render('admin/edit_shipment', { title: "Update Shipment", user: req.user, get_shipment });
};
exports.edit_shipment = edit_shipment;
const logout = async (req, res) => {
    res.clearCookie("token");
    res.redirect('/Admin_login');
};
exports.logout = logout;
