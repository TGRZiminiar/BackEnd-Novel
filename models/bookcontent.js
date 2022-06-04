const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema;

const bookcontentSchema = new mongoose.Schema({
    bookinfo:{
        type:ObjectId,
        ref:'Book'
    },
    bookChapter:{
        type:ObjectId,
        ref:'BookChapter',
    },
    bookContent:{
        type:Array,
    },

},{timestamps:true})

module.exports = mongoose.model('BookContent',bookcontentSchema)