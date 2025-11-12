"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const route_pages_1 = __importDefault(require("./server/routes/route_pages"));
const api_routes_1 = __importDefault(require("./server/routes/api_routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_config_1 = require("./server/config/db_config");
const cookieParser = require("cookie-parser");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "views"));
//static files
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
// parse  request to body
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use(cookieParser());
//routes
app.use("/", route_pages_1.default);
app.use('/api', api_routes_1.default);
(0, db_config_1.connectDB)();
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
