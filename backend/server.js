require('dotenv').config();
const express = require('express');
const multer = require('multer');
const { protect } = require('./middleware/UserMiddleware');
const path = require('path');
const User = require('./models/User');
const connectDB = require('./config/db');
const cupRoutes = require('./routes/cupRoutes');
const plateRoutes = require('./routes/plateRoutes');
const potRoutes = require('./routes/potRoutes');
const errorHandler = require('./middleware/error');
const ErrorResponse = require('./utils/errorResponse');
const cors = require('cors');
const cookieParser = require('cookie-parser');

connectDB();

const app = express();

app.use(cors({origin: "http://localhost:3000", credentials: true}));
app.use(express.json());

app.use(cookieParser());

app.use(express.static("./public"));

app.use("/cups",cupRoutes);

app.use("/plates",plateRoutes);

app.use("/pots",potRoutes);

app.use("/auth",require('./routes/userRoutes'));

const fileStorage = multer.diskStorage({
     destination: './public/uploads/',
     filename: (req, file, cb) => {
          cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
     },
});

const upload =  multer({storage: fileStorage}).single('image');

app.post("/upload", protect, upload, (req, res, next) => {
     console.log(req.file);
     const id = req.user._id;
     const file  = req.file.destination;

     try{
          User.findById(id, async(err, user) => {
               if(err){
                    console.log(err);
               }
               else{
                    user.image = file ? file : user.image;
                    await user.save();
               }
               res.status(200).json({
                    message: "Profile image successfully uploaded!",
               });
          });
     }
     catch(error){
          return next(new ErrorResponse("Failed to upload profile image", 404));
     }
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running at ${PORT}`))
