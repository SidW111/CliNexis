import mongoose, { Mongoose } from "mongoose";

export const appointmentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    docId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'doctor',
        required:true,
        
    },
    slotDate:{type:String,required:true},
    slotTime:{type:String,required:true},
    docData:{type:Object,required:true},
    userData:{type:Object,required:true},
    amount:{type:Number, required:true},
    date:{type:Date,default:Date.now},
    cancelled:{type:Boolean,default:false},
    payment:{type:Boolean,default:false},
    isCompleted:{type:Boolean,default:false},
    createdAt:{type:Date,default:Date.now}
},{minimize:false})

export const appointmentModel = mongoose.model("appointment",appointmentSchema);