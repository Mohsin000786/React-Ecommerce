const express = require('express');
const router = express.Router();

const {getAllCupProducts,getCupProductsById} = require('../controller/CupController');


router.get("/", getAllCupProducts);

router.get("/:id", getCupProductsById);

module.exports = router;
