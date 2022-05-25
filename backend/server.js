 const app = require("./src/app");
 const PORT = process.env.pot || 3000;
  
 app.listen(PORT, function(err){
     if (err) console.log("Error in server setup")
     console.log("Aplicação executando na porta...", PORT);
 })