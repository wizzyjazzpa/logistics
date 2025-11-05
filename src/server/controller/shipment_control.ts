import { shipment_model } from "../models/shipments";

 export const count_shipment_delivered = async ()=>{
      try {
              const transit_count = await shipment_model.countDocuments({status:"Delivered"});
              return transit_count;
      } catch (error) {
            console.log("error fetching total shipment delivered",error)
      }
 }
 export const count_shipment_Transit = async ()=>{
      try {
              const delivered_count = await shipment_model.countDocuments({status:"On Transit"});
              return delivered_count;
      } catch (error) {
            console.log("error fetching total shipment Transit",error)
      }
 }
 export const totalsenders = async()=>{
      try{
            const total_sender = await shipment_model.distinct("senderName",{senderName:{$exists:true,$ne: ""}});
            return total_sender.length;
      }catch(error){
         console.log("error fetching total Sender",error)
      }
 }
export const totalReceipiant = async()=>{
      try{
            const total_receiver = await shipment_model.distinct("receiverName",{receiverName:{$exists:true,$ne: ""}});
            return total_receiver.length;
      }catch(error){
         console.log("error fetching total Sender",error)
      }
 }