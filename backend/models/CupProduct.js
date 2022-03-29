const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cupSchema = new Schema({
     name: {
          type: String,
          required: true
     },
     image: {
          type: String,
          required: true
     },
     price:{
          type: Number,
          required: true
     },
     description: {
          type: String,
          required: true
     },
     counterInStock: {
          type: Number,
          required: true
     },

});

const CupProducts = mongoose.model("cupproduct", cupSchema);
module.exports = CupProducts;
