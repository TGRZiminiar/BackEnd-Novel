const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        text:true
    },
    email:{
        type:String,
        required:true,
        text:true
    },
    role:{
        type:String,
        default:"user",
    },
    coin:{
        type:Number,
        default:57,
    },
    coinSell:{
        type:Number,
        default:0
    },
    image:String,
    description:String,
    chapterbuy:{
        type:Number,
        default:0
    },
    gender:{
        type:String,
        default:'unknow',
        enum:[
            "male",
            "female",
            "lgbtq+",
            "unknow"
        ]
    },
    favorites:[{
        type:ObjectId, 
        ref:"Book"}],

    
},{timestamps:true})

module.exports = mongoose.model('User',userSchema)