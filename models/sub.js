const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema;

const subSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        mixlength:[2,'Too short'],
        unique:true,
        trim:true,
        index:true
    },
    
    parent:{
        type:ObjectId,
        ref:'Category',
        required:true
    },



},{timestamps:true})

module.exports = mongoose.model('Sub',subSchema)