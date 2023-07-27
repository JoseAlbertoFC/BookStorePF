const server = require("./src/app");
const { conn } = require("./src/db");

//TODO Documentacion de Swwagger No Borrar Este Comentario

//TODO ##################################################################################################################################################


// Swagger 

require('./swagger')(server);

//TODO ###################################################################################################################################################





conn.sync({ force : false }).then(() => {
  server.listen(process.env.PORT || 8000, () => {
    console.log(`Listening on port ${process.env.PORT}`);
  });
});
