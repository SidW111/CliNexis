import mongoose from "mongoose";

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

    amount:{type:Number, required:true},
   // date:{type:Number,required:true},
    cancelled:{type:Boolean,default:false},
    payment:{type:Boolean,default:false},
    isCompleted:{type:Boolean,default:false},
    createdAt:{type:Date,default:Date.now}
})

export const appointmentModel = mongoose.model("appointment",appointmentSchema);