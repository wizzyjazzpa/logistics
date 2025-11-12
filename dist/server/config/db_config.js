"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    try {
        const conn = await mongoose_1.default.connect("mongodb+srv://walisonmichael8_db_user:1oDXu2GUZGygsJcl@cluster0.ydf3i3m.mongodb.net/db_logistics");
        console.log("✅ MongoDB Connected To: " + conn.connection.host);
    }
    catch (error) {
        console.error("❌ MongoDB connection error:", error);
        process.exit(1);
    }
};
exports.connectDB = connectDB;
