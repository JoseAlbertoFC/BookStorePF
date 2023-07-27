const server = require("./src/app");
const { conn } = require("./src/db");

//TODO Documentacion de Swwagger No Borrar Este Comentario

//TODO ##################################################################################################################################################


// Swagger 

require('./swagger')(server);

//TODO ###################################################################################################################################################

<<<<<<< HEAD




conn.sync({ force : false }).then(() => {
=======
conn.sync({ force : true }).then(() => {
>>>>>>> bc8710a85ab09023c21efc59c864c4c6f8186064
  server.listen(process.env.PORT || 8000, () => {
    console.log(`Listening on port ${process.env.PORT}`);
  });
});
