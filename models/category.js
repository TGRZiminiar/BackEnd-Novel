const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:'Name is required',
        minlength:[2,'Too short'],
        unique:true,
        index:true,
    },
    
    //index: {Boolean|Object} - Tells Mongoose to ensure an index is created for this path. 
    //An object can be passed as well.
    //if the index already exists on the db, it will not be replaced.

},{timestamps:true})

module.exports = mongoose.model('Category',categorySchema);
