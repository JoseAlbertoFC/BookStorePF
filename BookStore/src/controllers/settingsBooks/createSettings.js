
const book = require("../../../api/Books.json");
const {SettingsBooks} = require("../../db.js")
const { Op } = require("sequelize");


const insertSettingsDatabase = async () => {

try{
    for( let dataBook of book) {
        
        //console.log("dataBook",dataBook);

        const authors = dataBook.volumeInfo.authors;
        if(dataBook.volumeInfo.authors){
            //console.log("authors ok");
            console.log("authors ",authors );
         const authorPromises = authors.map(async (author) => {
       
        const type = "AUTHORS";
        const nameType = author;
            console.log("author",author);
            //const { rows: findusers, count: totalUsers } = await User.findAndCountAll() 
            // const dataBD = await  SettingsBooks.findAndCountAll({
            //     where: {
            //             type: "AUTHORS",
            //             nameType: nameType,
            //           }
            // })
                                  
        // // Verificar si el autor ya existe en la base de datos
        // const existingAuthor = await SettingsBooks.count({
        //   where: {
        //     type: "AUTHORS",
        //     nameType: nameType,
        //   },
        // });

        // if (existingAuthor === 0) {
        //   // Si el autor no existe, crear un nuevo registro en la tabla SettingsBooks
        //   await SettingsBooks.create({
        //     type,
        //     nameType,
        //     descType: "Description for author",
        //     status: true,
        //   });
        // }
      });

        }
       
} 
} catch(error){
    console.error("Error al insertar autores:", error);
}

// try {
//     for (let bookJSON of book) {
//       const authors = bookJSON.volumeInfo.authors;
      
//       // Utilizamos map para recorrer el array de autores y realizar la inserción

//       // Esperar a que todas las inserciones sean completadas antes de continuar con el siguiente libro
//       await Promise.all(authorPromises);
//     }

//     console.log("Autores insertados correctamente en la base de datos.");
//   }catch (error) {
//     console.error("Error al insertar autores:", error);
//   }
}




  module.exports = {

    insertSettingsDatabase
  }
