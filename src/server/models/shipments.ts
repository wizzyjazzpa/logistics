import mongoose from "mongoose";
import Mongoose, {Schema ,Document } from "mongoose";
export interface Shipment extends Document{
    staff:string,
    senderName:string,
    senderAddress:string,
    senderPhone:string,
    senderEmail:string,

    
    paymentMethod:string,
    productType:string,
    deliveryMode:string,
    shipmentInsurance:string,
    status:string
    duration:string,
    shipmentOrigin:string,
    quantity:string,
    weight:string,
    costOfDelivery:string,
    subtotal:string,

    receiverAddress:string,
    receiverName:string,
    receiverphone:string,
    receiveremail:string,
    trackingID:string,
    currentLocation:string,
    currentLocationValue:string,
    description:string,
    created_at:Date

}

const ShipmentSchema = new Schema<Shipment>({
    staff:{type:String,require:true},
    senderName:{type:String,require:true},
    senderAddress:{type:String,require:true},
    senderPhone:{type:String,require:true},
    senderEmail:{type:String,require:true},

    paymentMethod:{type:String,require:true},
    productType:{type:String,require:true},
    deliveryMode:{type:String,require:true},
    shipmentInsurance:{type:String,require:true},
    status:{type:String,require:true},
    duration:{type:String,require:true},
    shipmentOrigin:{type:String,require:true},
    quantity:{type:String,require:true},
    weight:{type:String,require:true},
    costOfDelivery:{type:String,require:true},
    subtotal:{type:String,require:true},

    receiverAddress:{type:String,require:true},
    receiverName:{type:String,require:true},
    receiverphone:{type:String,require:true},
    receiveremail:{type:String,require:true},

    trackingID:{type:String,require:true},
    currentLocation:{type:String,require:true},
    currentLocationValue:{type:String,require:true},
    description:{type:String,require:true},
    created_at:{ type: Date, default: Date.now }



})

export const shipment_model = mongoose.model<Shipment>("Shipment",ShipmentSchema)