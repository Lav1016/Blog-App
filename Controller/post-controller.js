const mongoose = require("mongoose");
const PostModal = require("../models/Post")
const {message}= require("../Heplers/ErrorMessage")
const {generalSuccessMessages}= require("../Heplers/SuccessMessage")
const {statusCode}= require("../Heplers/StatusCode")
const {successResponse}= require("../Heplers/SuccessResponse")
const {errorResponse}= require("../Heplers/ErrorResponse")

// addonestory
exports.addOnePost = async(req,res)=>{
    try{
        const postdata = await new PostModal({...req.body,
            createdBy: mongoose.Types.ObjectId(req.user_id)
        })
        const SavePOst = await postdata.save()
        successResponse(res,statusCode.msg_save_code,generalSuccessMessages.UserCreatedSuccessfully,SavePOst)
    }catch(err){

        errorResponse(res,statusCode.exception_msg_code,message.exception_msg_text,err)

    }
}

// deleteOneStory
exports.deleteStory = async(req,res)=>{
    try{
        const deleteStory = await PostModal.findByIdAndDelete(req.query.id)
        if(!deleteStory){
            errorResponse(res.statusCode.exception_msg_code,message.notfound_text)
        }
        successResponse(res,statusCode.msg_save_code,generalSuccessMessages.msg_delete_text)
    }catch(err){
        errorResponse(res,statusCode.exception_msg_code,message.exception_msg_text,err)

    }
}

//updateStory
exports.UpdateStory = async(req,res)=>{
    try{
        const updateStroy = await PostModal.findByIdAndUpdate(req.params.id, req.body);
        successResponse(res,statusCode.msg_save_code,generalSuccessMessages.msg_update_text,updateStroy)

    }catch(err){

        errorResponse(res,statusCode.exception_msg_code,message.exception_msg_text,err)
    }
}

//fatech one Story
exports.getOneStory = async(req,res)=>{
    try{
        const item = await PostModal.findByIdAndUpdate(req.params.id,{
            $inc:{viewsCount:1}

        }).populate("category","title")
        if(item){
            item.comments  = await comment.find({story:item._id})
            return res.status(200).json(item);
        }
        return res.status(404).json({
            message: "Item not found",
            success: false,
        });

    }catch(err){
        errorResponse(res,statusCode.exception_msg_code,message.exception_msg_text,err)

    }
}

//getTopStories 
exports.TopStory = async(req,res)=>{
    try{
        const topStory = await PostModal.find()


    }catch(err){
        errorResponse(res,statusCode.exception_msg_code,message.exception_msg_text,err)

    }
}

//fetchAll Story
exports.fetchAll =async(req,res)=>{
    try{

    }catch(err){

    }
}