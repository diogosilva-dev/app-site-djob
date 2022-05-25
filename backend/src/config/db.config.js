
/**
 * file: src/config/db.config.js
 * description: arquivo responsável por fazer a conexão com a base de dados: MongoDB'
 * data: 29/04/2022
 */

 const dotenv = require('dotenv');

 dotenv.config();
 
 module.exports = {
   local: {
     localUrlDatabse: process.env.DB_URI,
     secret: 'password',
   },
 };