const PlateProducts = require('../models/PlateProduct');

const getAllPlateProducts = async (req,res) => {
     try {
       const plates = await PlateProducts.find({});

       res.json(plates);
     }catch(error) {
          console.error(error);
          res.status(500).json({message: "Products not found"});
     }
};

const getPlateProductsById = async (req,res) => {
     try {
       const plate = await PlateProducts.findById(req.params.id);

       res.json(plate);
     }catch(error) {
          console.error(error);
          res.status(500).json({message: "Product detail not found"});
     }
};

module.exports= {
    getAllPlateProducts,
    getPlateProductsById,
};
