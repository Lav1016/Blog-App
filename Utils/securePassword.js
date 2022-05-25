const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

// const salt = await bcrypt.genSalt(10);
// const hashedPassword = await bcrypt.hash(req.body.password,salt)

//hashed passowrd
async function securePassword (password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, 	salt);
    return hashedPassword;
};

// generate token 
async function  generateJwt(data) {
    let token = jwt.sign(data, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXP,
    });
    return token;
  };
module.exports = {securePassword,generateJwt};