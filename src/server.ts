import express from "express";
import path   from "path";
import dotenv from "dotenv"
import route_pages from "./server/routes/route_pages";
import api_routes from "./server/routes/api_routes";
import bodyParser from "body-parser";
import { connectDB } from "./server/config/db_config";
import cookieParser = require("cookie-parser");

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));


//static files
app.use(express.static(path.join(__dirname,"../public")));

// parse  request to body
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/",route_pages);
app.use('/api',api_routes);

connectDB()
app.listen(PORT,()=>{
    console.log(`🚀 Server running on http://localhost:${PORT}`);
})
