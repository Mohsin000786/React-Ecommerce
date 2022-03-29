const CupProducts = require('../models/CupProduct');

const getAllCupProducts = async (req,res) => {
     try {
       const cups = await CupProducts.find({});

       res.json(cups);
     }catch(error) {
          console.error(error);
          res.status(500).json({message: "Products not found"});
     }
};

const getCupProductsById = async (req,res) => {
     try {
       const cup = await CupProducts.findById(req.params.id);

       res.json(cup);
     }catch(error) {
          console.error(error);
          res.status(500).json({message: "Product detail not found"});
     }
};

module.exports = {
    getAllCupProducts,
    getCupProductsById,
};

