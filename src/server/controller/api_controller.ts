import { Request,Response } from "express";
import { admin_login } from "../models/login_model";
import  { generateToken,verifyToken} from '../utils/jwt';
import { shipment_model } from "../models/shipments";
import { sendMail } from "../utils/mail";

export const RegisterAdmin = async(req:Request,res:Response)=>{

     const {firstname,lastname,email,username,password}=req.body;
       await admin_login.create({first_name:firstname,last_name:lastname,email:email,username:username,password:password})
      .then(result=>{
               res.status(200).json({data:result, message:"Login Details  Created Successfull"});
        }).catch(error=>{
                 res.status(500).json({error:error.message});
         })
       
}

export const Login = async(req:Request, res:Response)=>{
        const {username, password}= req.body
        try {
              
                const users = await admin_login.findOne({username:username,password:password});
               if(!users){
                console.log("Invalid username/password")
                     res.json({error:"Invalid Credentials",status:500});
               }else{
                         const token = generateToken({username})
                  /// console.log(token)
                   res.cookie("token",token,{
                        httpOnly:true,
                        maxAge:60 * 60 * 100,
                        sameSite:"lax"
                   })
                   /// return res.render("/Home")
                   res.status(200).json({message:"Login successfull",token:token});
                  
               }
        } catch (error) {
            console.error("you have a database error:");
        }
}

export const createShipment = async(req:Request,res:Response)=>{
        
     const {
        staffUser,senderName, senderAddress,
        senderPhone,senderEmail,paymentMethod,
        productType,deliveryMode,shipmentInsurance,
        status,duration,shipmentOrigin,quantity,
        weight,costDelivery,subtotal,receiverAddress,
         receiverFullname,receiverphone,receiveremail,
        trackingId,currentLocation,currentLocationValue, description }=req.body;
         const subject = "Tracking Identity"
         const text = `<h3>Hello ${receiverFullname}</h3> <br/><p>Your shipment has been created sucessfully. kindly find your tracking indentity bellow<br/> TrackingID: ${trackingId}</p>`;
        try{
             const createshipment=  await shipment_model.create(
                {
                    staff:staffUser,
                     senderName,
                      senderAddress,
                      senderPhone,
                    senderEmail,
                    paymentMethod,
                    productType,
                    deliveryMode,
                    shipmentInsurance,
                    status,
                    duration,
                    shipmentOrigin,
                    quantity,
                    weight,
                     costOfDelivery:costDelivery,
                    subtotal,
                    receiverAddress,
                    receiverName: receiverFullname,
                    receiverphone,
                    receiveremail,
                     trackingID:trackingId,
                    currentLocation,
                    currentLocationValue,
                    description
                });
            if(createshipment){
                 res.status(200).json({data:createshipment,message:"shipment has been created Successfully"});
                 await sendMail({
                    to:receiveremail,
                    subject:subject,
                    html:text

                 });
                 
            }else{
                res.status(500).json({status:500,message:"shipment could not be created "});
            }
        
         }catch(err){
             console.error(err)
         }
       // console.log(req.body)
   

}

export const delete_single_shipment_history = async(req:Request,res:Response)=>{
     
      const trackID = req.params.trackID
       await shipment_model.deleteOne({trackingID:trackID})
       .then(result=>{
             res.status(200).json({message:'Your shpiment history has been deleted'})
       }).catch(()=>{
            res.status(500).json({error:"Could not delete shipment history"})
       })
}
export const updateShipment = async(req:Request,res:Response)=>{
        
     const {
        staffUser,senderName, senderAddress,
        senderPhone,senderEmail,paymentMethod,
        productType,deliveryMode,shipmentInsurance,
        status,duration,shipmentOrigin,quantity,
        weight,costDelivery,subtotal,receiverAddress,
         receiverFullname,receiverphone,receiveremail,
        trackingId,currentLocation,currentLocationValue, description }=req.body;
         const subject = "Tracking Identity"
         const text = `<h3>Hello ${receiverFullname}</h3> <br/><p>Your shipment has been Updated sucessfully.`;
        try{
             const updateshipment=  await shipment_model.updateOne({trackingID:trackingId},
                {
                    staff:staffUser,
                     senderName,
                      senderAddress,
                      senderPhone,
                    senderEmail,
                    paymentMethod,
                    productType,
                    deliveryMode,
                    shipmentInsurance,
                    status,
                    duration,
                    shipmentOrigin,
                    quantity,
                    weight,
                     costOfDelivery:costDelivery,
                    subtotal,
                    receiverAddress,
                    receiverName: receiverFullname,
                    receiverphone,
                    receiveremail,
                    currentLocation,
                    currentLocationValue,
                    description
                });
            if(updateshipment){
                 res.status(200).json({data:updateshipment,message:"shipment has been updated Successfully"});
                 await sendMail({
                    to:receiveremail,
                    subject:subject,
                    html:text

                 });
                 
            }else{
                res.status(500).json({status:500,message:"shipment could not be created "});
            }
        
         }catch(err){
             console.error(err)
         }
       // console.log(req.body)
   

}

 


