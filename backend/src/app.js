/**
 * file: app.js
 * description: arquivo responsável por fazer a conexão com arquivo 'server.js'
 * data: 29/04/2022
 */

 const express = require("express");
 const cors = require("cors");
 const morgan = require("morgan");
 const mongooseConnection = require("./config/mongooseConnection.config");
 
 const app = express();
 
 // ==> Rotas da API:
 const index = require("./routes/index");
 const userRoutes = require("./routes/user.routes");
 const productsRoutes = require("./routes/products.routes");
 
 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());
 app.use(express.json({ type: "application/vnd.api+json" }));
 app.use(morgan("dev"));
 app.use(cors());
 
 // ==> Retornando a conexão via mongoose via external file usando 'app.set()'
 app.set("mongoose connection", mongooseConnection);
 
 app.use(index);
 app.use("/api/v1/", userRoutes);
 app.use("/api/v1/", productsRoutes);
 
 module.exports = app;