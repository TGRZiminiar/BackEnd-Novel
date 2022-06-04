const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema;
const bookchapterSchema = new mongoose.Schema({
    bookinfo:{
        type:ObjectId,
        ref:'Book'
    },
    author:{
        type:ObjectId,
        ref:'User'
    },
    chapterIndex:{
        type:Number,
        default:0,
    },
    chapterName:{
        type:String,
        required:true,   
    },
    sellStatus:{
        type:Boolean,
        default:false,
    },
    price:{
        type:Number,
        default:0,
    },
    description:{
        type:String,
    },
    viewed:[{
        ByUser:{type:ObjectId,ref:"User"},
        viewedAt:{type:Date,default:new Date()}
    }],

    purchaseBy:[{
        ByUser:{type:ObjectId,ref:'User'},
        purchaseAt:{type:Date,default:new Date()}
    }],
    
    publishTime:{type:Date,default:new Date()}
},{timestamps:true})

module.exports = mongoose.model('BookChapter',bookchapterSchema)