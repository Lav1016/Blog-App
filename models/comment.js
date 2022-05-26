const { Schema, model } = require("mongoose");
 
const CommentSchema = new Schema (
    {   
        body: {
            type: String,
            required: true,
        }, 
        post: {
            type: Schema.Types.ObjectId,
            ref: "post",
        },       
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
         
    },
    { timestamps: true }
);
 
module.exports = model("Comment", CommentSchema);