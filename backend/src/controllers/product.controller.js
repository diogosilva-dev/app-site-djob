/**
 * Arquivo: src/controllers/product.controller.js
 * Descrição: arquivo responsável pelo CRUD da classe: 'Product'
 */

 const Products = require("../models/products.model");

 // ==> Usando conceito de Async e Await
 
 // ==> Método responsável por Criar um novo 'Produto':
 exports.registerNewProduct = async (req, res) => {
   try {
     const isProduct = await Products.find({ referency: req.body.ref });
     console.log(isProduct);
     if (isProduct.length >= 1) {
       return res
         .status(409)
         .json({ message: "Atenção! Este produto já está cadastrado!" });
     }
 
     const newProduct = new Products(req.body);
     const product = await newProduct.save();
     return res
       .status(201)
       .json({ message: "Produto cadastrado com sucesso!", product });
   } catch (err) {
     return res.status(400).json({ err });
   }
 };
 
 // ==> Método responsável por retornar os 'Produtos'
 exports.returnAllProducts = async (req, res) => {
   try{
    const allProducts = await Products.find();
    res.status(200).json(allProducts)
   } catch(error){
     res.status(500).json({erro: error})
   }
 };

 exports.returnSingleProduct = async (req, res) => {
  try{
  const ref = req.params.ref;
   const sigleProduct = await Products.findOne({ ref }).exec()
   res.status(200).json(sigleProduct)
  } catch(error){
    res.status(500).json({erro: error})
  }
};