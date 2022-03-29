require('dotenv').config();

const cupsdata = require('./data/Cups');
const platesdata = require('./data/Plates');
const potsdata = require('./data/Pots');
const connectDB = require('./config/db');
const  CupProducts = require('./models/CupProduct');
const  PlateProducts = require('./models/PlateProduct');
const  PotProducts = require('./models/PotProduct');

connectDB();

const importData = async () => {
     try {
        await CupProducts.deleteMany({});

        await CupProducts.insertMany(cupsdata);

        await PlateProducts.deleteMany({});

        await PlateProducts.insertMany(platesdata);

        await PotProducts.deleteMany({});

        await PotProducts.insertMany(potsdata);

        console.log("Data Import Success");

        process.exit();
     } catch(error){
          console.error("Error with data import");
          process.exit(1);
     }
};

importData();
