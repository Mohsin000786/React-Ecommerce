const PotProducts = require('../models/PotProduct');

const getAllPotProducts = async (req,res) => {
     try {
       const pots = await PotProducts.find({});

       res.json(pots);
     }catch(error) {
          console.error(error);
          res.status(500).json({message: "Products not found"});
     }
};

const getPotProductsById = async (req,res) => {
     try {
       const pot = await PotProducts.findById(req.params.id);

       res.json(pot);
     }catch(error) {
          console.error(error);
          res.status(500).json({message: "Product detail not found"});
     }
};

module.exports = {
    getAllPotProducts,
    getPotProductsById,
};
