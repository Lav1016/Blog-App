const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema({
   name:{
       type:String,
       required:true
   },
   createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
},
   
},{timestamps:true}
)
module.exports = mongoose.Schema("Category",CategorySchema)