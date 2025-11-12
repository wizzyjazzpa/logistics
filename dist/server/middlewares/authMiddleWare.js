"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jwt_1 = require("../utils/jwt");
const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect('/Admin_login');
    }
    const decoded = (0, jwt_1.verifyToken)(token);
    if (!decoded) {
        res.clearCookie("token");
        return res.redirect('Admin_login');
    }
    req.user = decoded;
    next();
};
exports.authMiddleware = authMiddleware;
