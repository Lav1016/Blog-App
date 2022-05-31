const mongoose = require("mongoose");
const CategorySchema = require("../models/Category")

const {message}= require("../Heplers/ErrorMessage")
const {generalSuccessMessages}= require("../Heplers/SuccessMessage")
const {statusCode}= require("../Heplers/StatusCode")
const {successResponse}= require("../Heplers/SuccessResponse")
const {errorResponse}= require("../Heplers/ErrorResponse")

//Addone Category
exports.addOne = async(req,res)=>{
    try{
        const newrecord =  await CategorySchema({...req.body,
            createdBy: mongoose.Types.ObjectId(req.user_id)
        })
        const recordSave = await newrecord.save()
        successResponse(res,statusCode.msg_save_code,generalSuccessMessages.UserCreatedSuccessfully,recordSave)
    }catch(err){
        errorResponse(res,statusCode.exception_msg_code,message.exception_msg_text,err)
    }
}
//deleteOnedata
exports.removeOneData = async(req,res)=>{
    try{
        const deleted = await CategorySchema.findByIdAndDelete(req.query.id)
        if(!deleted == null){
            errorResponse(res,statusCode.exception_msg_code,message.notfound_text)
        }
        successResponse(res,statusCode.msg_save_code,generalSuccessMessages.msg_delete_text)
    }catch(err){
        errorResponse(res,statusCode.exception_msg_code,message.exception_msg_text,err)
    }
}

// update one
exports.updateOne = async(req,res)=>{
    try{
     const updateCategory = await CategorySchema.findByIdAndUpdate(req.params.id, req.body);
     successResponse(res,statusCode.msg_save_code,generalSuccessMessages.msg_update_text,updateCategory)
    }catch(err){
        errorResponse(res,statusCode.exception_msg_code,message.exception_msg_text,err)
    }
}

//get one 
exports.getone = async(req,res)=>{
    try {
        const item = await CategorySchema.findOne(req.params.id);
        if(!item) {
            errorResponse(res,statusCode.exception_msg_code,message.ITEM_NOT_FOUND)
        }
        successResponse(res,statusCode.msg_save_code,generalSuccessMessages.fetch_One_Record,item)
    } catch(err) {
        return res.status(500).json({
            message: err.message,
            success: false,
        });
    }
}

// get all
// exports.getAll = async(req,res)=>{
//     try{
//         const 

//     }catch(err){

//     }
// }