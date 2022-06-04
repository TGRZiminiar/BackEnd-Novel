const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema;
const commentSectionSchema = new mongoose.Schema({
    book:{
        type:ObjectId,
        ref:'Book'
    },
    
    bookChapter:{
        type:ObjectId,
        ref:'BookChapter',
        default:null
    },

    commentSection:[{
        comments:{
            content:String,
            commentedAt:{type:Date,default:new Date()},
        },
        likes:[{type:ObjectId,ref:"User"}],
        disLikes:[{type:ObjectId,ref:"User"}],
        postedBy:{type:ObjectId,ref:"User"},
        postedAt:{type:Date,default:new Date()},
    }],

    ratingSection:[{
        rating:{
            language:Number,    
            fun:Number,    
            update:Number,    
        },
        ratingBy:{type:ObjectId,ref:"User"},
        ratingAt:{type:Date,default:new Date()}
    }]
})

module.exports = mongoose.model('commentSection',commentSectionSchema)