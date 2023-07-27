
const book = require("../../../api/Books.json");
const {SettingsBooks} = require("../../db.js")
const { Op } = require("sequelize");


const insertSettCattegories = async () => {

try{
    
    for( let dataBook of book) {
        
        //console.log("dataBook",dataBook);

        const categori = dataBook.volumeInfo.categories;
        if(dataBook.volumeInfo.categories){
            //console.log("authors ok");
            // console.log("categori ",categori );
         const authorPromises = categori.map(async (categories) => {
       
        const type = "CATEGORIES";
        const nameType = categories;
            // console.log("categori----",categories);
            //const { rows: findusers, count: totalUsers } = await User.findAndCountAll() 
            const existingAuthor = await  SettingsBooks.count({
                where: {
                        type: type,
                        nameType: nameType,
                      }
            })
        if (existingAuthor === 0) {
            // console.log("********************************");
          // Si el autor no existe, crear un nuevo registro en la tabla SettingsBooks
          await SettingsBooks.create({
            type,
            nameType,
            descType: "Categories",
            status: true,
          });
        }
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

    insertSettCattegories
  }
