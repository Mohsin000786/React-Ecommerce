const crypto = require('crypto');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/errorResponse');
const sendEmail = require('../utils/sendEmail');

exports.register = async (req,res,next) => {
     const { firstname, lastname, email, password, confirmpass } = req.body;

     if(password !== confirmpass) {
          return next(new ErrorResponse("Password do not match", 401));
     }

     try{
          const user = await User.create({
               firstname, lastname, email, password,
          });

          await user.save();

          res.status(200).json({
               message: "Your registration is successful. kindly! login.",
          });
     }
     catch(error){
          next(error);
     }

}

exports.login = async (req,res,next) => {
     const { email, password } = req.body;

     if(!email || !password){
               return next(new ErrorResponse("Please enter Email & Password", 400));
          }
     try{
          const user = await User.findOne({email}).select("+password");
          if(!user){
               return next(new ErrorResponse("Incorrect Email or Password", 401));
          }

          const isMatch = await user.matchPasswords(password);
          if(!isMatch){
               return next(new ErrorResponse("Password is Incorrect", 401));
          }

          const accessToken = await user.getAccessToken();
          res.cookie('accessToken', accessToken, {
               sameSite: "strict",
               path: '/',
               expires: new Date(Date.now() + 7*24*60*60*1000),
               httpOnly: true,
          });

          res.status(200).json({
               message:"You are loggedIn successfully",
          });

     }
     catch(error){
          res.status(400).json({success: false, error: error.message});
     }

}


exports.user = async (req,res,next) => {
     try{
          const user = await req.user;
          res.status(200).json({status: true, data: user});
     }
     catch(error){
          next(error);
     }

};


exports.logout = (req, res, next) => {
     try{
          res.clearCookie('accessToken', {path: "/"});
          res.status(200).json("user logout");
     }
     catch(error){
          next(error);
     }
};



exports.forgotpassword = async (req,res,next) => {
     const { email }  = req.body;

     try{
          const user= await User.findOne({email});

          if(!user){
               return(new ErrorResponse("Invalid Email, So Email could not be send", 404));
          }
          const resetToken = await user.getResetPasswordToken();

          await user.save();

          const resetUrl = `http://localhost:3000/resetpassword/${resetToken}`;

          const message = `
            <h1> Hey! You have requested to reset your Password </h1>
            <p> Please go to the given link to reset your password </p>
            <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
          `
          try{
               await sendEmail({
                    to: user.email,
                    subject: "Password Reset Request",
                    text: message
               });
               res.status(200).json({success: true, data: "Email sent"});
          }
          catch(error){
               user.resetPasswordToken = undefined;
               user.resetPasswordexpire = undefined;

               await user.save();

               return next(new ErrorResponse("Email could not be send", 500));
          }
     }catch(error){
          next(error);
     }
};

exports.resetpassword = async (req,res,next) => {
     resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");

     try{
          const user = await User.findOne({
               resetPasswordToken,
               resetPasswordExpire: { $gt: Date.now()},
          });

          if(!user) {
               return next(new ErrorResponse("Invalid Reset Token",400));
          }

          user.password = req.body.password;
          user.resetPasswordToken = undefined;
          user.resetPasswordExpire = undefined;

          await user.save();

          res.status(201).json({status: true, data: "Password Reset Success"});
     }
     catch(error){
          return next(error);
     }

};

