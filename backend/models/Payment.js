import express from 'express';
import mongoose from "mongoose";
import { type } from 'server/reply';

const router = express();
const mongoose = mongoose();

const paymentSchema = new mongoose.Schema({
    transactionId : {
     type : String,
     required : true
    },
    amount : {
        type : Number,
        required : true
    },
    currency : {
        type:String ,
        required :true
    },
    customerName : {
        type : String,
        required: true
    },
    cardNumber : {
        type : String,
        required : true,
    },
    expirationDate : {
        type: String,
        required: true
    },
    cvv : {
        type: String,
        required : true
    },
    status : {
        type : String,
        default : pending
    }
});

export default router;
