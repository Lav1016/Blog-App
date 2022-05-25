const mongoose = require("mongoose");
const userModal = require("../models/User");
const bcrypt = require("bcrypt");

const { securePassword,generateJwt } = require("../Utils/securePassword");
const jwt = require("jsonwebtoken");


//register
exports.register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // const hash = await securePassword(req.body.password)
    const newUser = new userModal({
      username: req.body.username,
      email: req.body.email,
      language: req.body.language,
      experience:req.body.experience,
      password: hashedPassword,
    });
    const user = await newUser.save();
    // res.status(200).json(user);
    // res.json({
    //     status:200,
    //     data:user
    // })
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

//login
exports.login = async (req,res)=>{
    try{
        const {email} = req.body
        const user = await userModal.findOne({email:email})
        if(!user){
            res.status(400).json("wrong credentials")
        }
        const validate = await bcrypt.compare(req.body.password,user.password)
        if(!validate) {
            res.status(400).json("wronge credentails ")
        }
        const userData = {
            emailId :req.body.email,
            userId :user._id
        };
        const Token = await generateJwt(userData)
        const {password,...others} = user._doc
        res.json({
            status:200,
            data:others,Token
        })
    }catch(err){
        console.log(err)

    }
}