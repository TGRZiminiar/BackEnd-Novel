const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema;

const notificationSchema = new mongoose.Schema({
    
    author:{
        type:ObjectId,
        ref:"User"
    },
    dataNoti:[{
        book:{
            type:ObjectId,
            ref:'Book',
            default:null,
        },
        bookChapter:{
            type:ObjectId,
            ref:'BookChapter',
            default:null
        },
        text:String,
        sendBy:{
            type:ObjectId,
            ref:"User"
        },
        authorRead:{type:Number,default:0},
        actionAt:{type:Date,default:new Date()}
    }],


})

module.exports = mongoose.model('Notification',notificationSchema)