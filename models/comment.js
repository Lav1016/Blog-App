const { Schema, model } = require("mongoose");
 
const CommentSchema = new Schema (
    {   
        body: {
            type: String,
            required: true,
        }, 
        post: {
            type: mongoose.Types.ObjectId,
            ref: "post",
        },       
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
         
    },
    { timestamps: true }
);
 
module.exports = model("Comment", CommentSchema);