const crypto = require('crypto');
const unique = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


const UserSchema = new mongoose.Schema({
     firstname: {
          type: String,
          required: [true, "Please provide First Name"],
     },
     lastname: {
          type: String,
          required: [true, "Please provide Last Name"],
     },
     email: {
          type: String,
          required: [true, "Please provide a Email"],
          unique: [true, "Email address already exist"],
          match: [
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please Enter a valid Email"
          ],
     },
     password: {
          type: String,
          required: [true, "Please enter a Password"],
          minLength: 6,
          select: false,
     },
     image: {
          type: String,
     },
     resetPasswordToken: String,
     resetPasswordexpire: Date,
});

UserSchema.pre("save", async function(next){
     if(!this.isModified("password")){
          next();
     }
     const salt = await bcrypt.genSalt(10);
     this.password = await bcrypt.hash(this.password, salt);
     next();
});

UserSchema.methods.matchPasswords = async function(password){
     return await bcrypt.compare(password, this.password);
};


UserSchema.methods.getAccessToken = async function(res) {
     try{
          let accessToken =  jwt.sign({id: this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE});
          return accessToken;
     }
     catch(error){
          res.json("Token cannot be generated");
          console.log(error);
     }
};


UserSchema.methods.getResetPasswordToken = function(){
     const resetToken = crypto.randomBytes(20).toString("hex");

     this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
     this.resetPasswordexpire =Date.now() + 10 * (60 * 1000);

     return resetToken;
}

UserSchema.plugin(unique);
const User = mongoose.model('User', UserSchema);

module.exports = User;
