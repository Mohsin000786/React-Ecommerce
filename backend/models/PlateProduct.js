const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plateSchema = new Schema({
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

const PlateProducts = mongoose.model("PlateProduct", plateSchema);
module.exports = PlateProducts;
