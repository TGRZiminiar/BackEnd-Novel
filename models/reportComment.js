const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema;
const reportSchema = new mongoose.Schema({
    parentCommentReport:{
        type:ObjectId,
        ref:"commentSection",
    },
    replyCommentReport:{
        type:ObjectId,
        ref:"replyComment",
        default:null,
    },
    ownerComment:String,
    commentText:{type:String},
    reasonForReport:{type:String},
    reportBy:{
        type:ObjectId,
        ref:"User",
    },
},{timestamps:true})

module.exports = mongoose.model('reportComment',reportSchema)