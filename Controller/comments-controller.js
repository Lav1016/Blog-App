const mongoose = require("mongoose");
const commentModal = require('../models/comment')
const {message}= require("../Heplers/ErrorMessage")
const {generalSuccessMessages}= require("../Heplers/SuccessMessage")
const {statusCode}= require("../Heplers/StatusCode")
const {successResponse}= require("../Heplers/SuccessResponse")
const {errorResponse}= require("../Heplers/ErrorResponse")

// addComments
exports.addComments = async(req,res)=>{
    try{
        const newComments = new commentModal({
            ...req.body,
            createdBy: mongoose.Types.ObjectId(req.user_id)


        });
        const saveRecord= await newComments.save()
        successResponse(res,statusCode.msg_save_code,generalSuccessMessages.UserCreatedSuccessfully,saveRecord)
    }catch(err){
        // console.log(err)
        errorResponse(res,statusCode.exception_msg_code,message.exception_msg_text,err)
    }
}

//removeComments
exports.commentsDelete =async(req,res)=>{
    try{
        const deleted = await commentModal.findByIdAndDelete(req.params.id);
        if(!deleted) {
            errorResponse(res.statusCode.exception_msg_code,message.notfound_text)
        }
        successResponse(res,statusCode.msg_save_code,generalSuccessMessages.msg_delete_text)

    }catch(err){
        errorResponse(res,statusCode.exception_msg_code,message.exception_msg_text,err)


    }
}
