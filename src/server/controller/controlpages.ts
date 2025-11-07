import {Request,Response} from "express";
import { shipment_model } from "../models/shipments";
import {count_shipment_delivered, totalsenders,count_shipment_Transit,totalReceipiant} from "./shipment_control";


export const home = async(req:Request,res:Response)=>{

      res.render("index",{title:"Home"});
}

export const about = async(req:Request, res:Response)=>{
       res.render("about",{title:"About"});
}

export const services = async(req:Request,res:Response)=>{
      res.render("services",{title:"Services"});
}

export const contact = async(req:Request,res:Response)=>{
       res.render("contact",{title:"Contact"});
}

export const tracking = async(req:Request,res:Response)=>{
      const trackingID = req.query.trackingID
       const getshipments = await shipment_model.findOne({trackingID:trackingID})
       res.render("tracking",{title:"tracking",getshipments});
}


//Admin
export const AdminRegister  = async(req:Request,res:Response)=>{
       res.render('admin/auth-register',{title:"Admin-Register"})
}
export const Login  = async (req:Request,res:Response)=>{
      res.render('admin/auth-login',{title:"Admin-Login"})
}

 export const Admin_home = async(req:Request, res:Response)=>{
       const getshipments = await shipment_model.find();
       const count_delivered = await count_shipment_delivered();
       const count_sender = await totalsenders();
       const count_receiver = await totalReceipiant();
       const count_transit = await count_shipment_Transit();
       res.render('admin/index',{
            title:"Admin-Home", user:(req as any).user,
            getshipments,
            count_delivered,
            count_sender,
            count_transit,
            count_receiver
      });
 }

 export const createShipment = async(req:Request,res:Response)=>{

      res.render("admin/create_shipment",{title:"Shipment", user:(req as any).user})
 }

export const edit_shipment = async(req:Request,res:Response)=>{
      const id = req.query.id
     
      const get_shipment = await shipment_model.findOne({trackingID:id});
      res.render('admin/edit_shipment',{title:"Update Shipment",user:(req as any).user,get_shipment});

}

 export const logout = async(req:Request,res:Response)=>{
      res.clearCookie("token");
      res.redirect('/Admin_login');
}