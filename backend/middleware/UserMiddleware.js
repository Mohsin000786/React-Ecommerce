const jwt = require('jsonwebtoken');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

let token;

exports.protect = async (req,res,next) => {
     token = req.cookies.accessToken;

     if(!token){
          return next(new ErrorResponse("Not valid access token", 403));
     }

     try{
         const decoded = jwt.verify(token, process.env.JWT_SECRET);

         const user = await User.findById(decoded.id);

         if (!user) {
               return next(new ErrorResponse("No user found with this id", 404));
         }
         req.user = user;

         next();

     }
     catch(error){
          return next(new ErrorResponse("Not authorized to access this route", 401));
     }
};

exports.userAuth = async (req,res,next) => {
     token = req.cookies.refreshToken;

     if(!token && User.find((x) => x.refreshTokens.token !== token)){
          return next(new ErrorResponse("Not authorized to access this route", 401));
     }

     try{
         const decoded = jwt.verify(token, process.env.JWT_REFRESH);


         const user = await User.findById(decoded._id);

         if (!user) {
               return next(new ErrorResponse("No user found with this id", 404));
         }
         req.user = user;

         next();

     }
     catch(error){
          return next(new ErrorResponse("Not authorized to access this route", 401));
     }
};
