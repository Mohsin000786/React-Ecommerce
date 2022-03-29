const express = require('express');
const router = express.Router();

const {getAllPlateProducts,getPlateProductsById} = require('../controller/PlateController');


router.get("/",  getAllPlateProducts);

router.get("/:id", getPlateProductsById);

module.exports = router;
