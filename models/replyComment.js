const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema;

const replyCommentSchema = new mongoose.Schema({
    parentComment:{
        type:ObjectId,
        ref:"commentSection"
    },
    commentReply:[{
        comments:{
            content:String,
        },
        postedBy:{type:ObjectId,ref:"User"},
        postedAt:{type:Date,default:new Date()},
        likes:[{type:ObjectId,ref:"User"}],
        disLikes:[{type:ObjectId,ref:"User"}],
    }],

})

module.exports = mongoose.model('replyComment',replyCommentSchema)