/**
 * file: src/models/product.model.js
 * description: arquivo responsavel pelo modelo da classe 'Product'
 * data: 29/04/2022
 */

 const mongoose = require('mongoose');
 
 const { Schema } = mongoose;
 
 const productSchema = new Schema({
   category: { type: String, maxlength: 50, required: true },
   titulo: { type: String, maxlength: 100, required: true },
   ref: { type: String, required: true },
   description: { type: String, required: true},
   colors: [
     {
       color: { type: String, required: false },
     },
   ],
   images: [
       {
        image: { type: String, required: true}
       }
   ],
 }, {
   timestamps: true,
   collection: 'products',
 });
 
 
 // ==> Esse método irá fazer uma pesquisa por um 'produto' por 'referencia'
 /*
 productSchema.statics.findByCredentials = async (titulo, ref) => {
   const product = await Products.findOne({ ref });
   console.log(product);
   if (!product) {
     throw new Error({ error: 'Produto inválido!' });
   }
   return product;
 };
 */
 
 const Products = mongoose.model('Product', productSchema);
 
 module.exports = Products;