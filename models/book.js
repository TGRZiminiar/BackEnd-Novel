const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema;

const bookSchema = new mongoose.Schema({

    bookname:{type:String,index:true},
    author:{
        type:ObjectId,
        ref:'User',
    },
    bookType:{
        type:String,
        default:'novel',
        enum:[
            "novel",
            "copyRightNovel",
        ]
    },

    totalChapter:{
        type:Number,
        default:0
    },

    writer:String,

    penname:String,

    bookcategory:{
        type:ObjectId,
        ref:'Category'
    },

    booksub:{
        type:ObjectId,
        ref:'Sub',
    }, 

    description:{
        type:String,
    },
    
    publistStatus:{
        type:Boolean,
        default:false,
    },
    endStatus:{
        type:Boolean,
        default:false,
    },
    viewed:Number,
    image:{type:Array},
    tags:[
        {type:String}
    ],

    commentCount:{type:Number,default:0}, //จะได้ไม่ต้อง Query ทั้งคอมเมนต์เพื่อหา
    lastestChapter:{type:ObjectId,ref:'BookChapter'}

},{timestamps:true})

module.exports = mongoose.model('Book',bookSchema)