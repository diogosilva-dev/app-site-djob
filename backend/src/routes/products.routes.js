/**
 * file: src/routes/product.routes.js
 * description: arquivo responsável pelas rotas do 'Produto'
 */

 const express = require('express');

 const router = express.Router();
 const productsController = require('../controllers/product.controller');
 
 // ==> Rota responsável por retornar o produto: localhost:3000/api/v1/product
 router.get('/products', productsController.returnAllProducts);
 router.get('/singleProduct/:ref', productsController.returnSingleProduct);
 
 module.exports = router;