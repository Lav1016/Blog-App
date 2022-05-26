const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        unique:true
    },
    photo:{
        type:String,
        required:false
    },
    username:{
        type:String,
        required:true
    },
    body: {
        type: String,
        required: true,
    },
    viewsCount: {
        type: Number,
        default: 0,
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment",
    }],
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    categories:{
        type:Array,
        required:false
    }
},{timestamps:true}
)
module.exports = mongoose.Schema("Post",PostSchema)