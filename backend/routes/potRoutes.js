const express = require('express');
const router = express.Router();

const {getAllPotProducts,getPotProductsById} = require('../controller/PotController');


router.get("/",  getAllPotProducts);

router.get("/:id", getPotProductsById);

module.exports = router;
