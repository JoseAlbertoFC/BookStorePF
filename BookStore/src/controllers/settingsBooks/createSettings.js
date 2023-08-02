const book = require("../../../api/Books.json");
const { SettingsBook } = require("../../db.js");
const { Op } = require("sequelize");

const insertDBAuthors = async () => {
  try {
    for (let dataBook of book) {
      //console.log("dataBook",dataBook);

      const authors = dataBook.volumeInfo.authors;
      if (dataBook.volumeInfo.authors) {
        //console.log("authors ok");
        // console.log("authors ", authors);
        const authorPromises = authors.map(async (author) => {
          const type = "AUTHORS";
          const nameType = author;
          // console.log("author", author);
          //const { rows: findusers, count: totalUsers } = await User.findAndCountAll()
          const dataBD = await SettingsBook.count({
            where: {
              type: type,
              nameType: nameType,
            },
          });

          if (dataBD === 0) {
            // console.log("********************************");
            // Si el autor no existe, crear un nuevo registro en la tabla SettingsBooks
           const nuevoRegistro=  await SettingsBook.create({
              type,
              nameType,
              descType: "Description for author",
              status: true,
            });
            // console.log('Registro insertado:', nuevoRegistro.toJSON());
          }
        });
      }
    }
  } catch (error) {
    console.error("Error al insertar autores:", error);
  }
};



const insertDBCategories = async () => {
  try {
    for (let dataBook of book) {
      //console.log("dataBook",dataBook);

      const DBCategories = dataBook.volumeInfo.categories ;
      
      if (DBCategories) {
        // console.log("DBCategories ok");
        //  console.log("DBCategories ", DBCategories);
        const categoriesPromises = DBCategories.map(async (CategoriVal) => {
          const type = "CATEGORIES";
          const nameType = CategoriVal;
          // console.log("nameType ",nameType )

          const dataBD = await SettingsBook.count({
            where: {
              type: type,
              nameType: nameType,
            },
          });

          if (dataBD === 0) {
            //  console.log("********************************");
            // Si el autor no existe, crear un nuevo registro en la tabla SettingsBooks
            await SettingsBook.create({
              type,
              nameType,
              descType: "Description for Categories",
              status: true,
            });
          }
        });
      }
    }
  } catch (error) {
    console.error("Error al insertar autores:", error);
  }
};

const insertDB = async () => {
  try {
    for (let dataBook of book) {
      //console.log("dataBook",dataBook);

      let DBPublish = dataBook.volumeInfo.publishedDate;
      if (dataBook.volumeInfo.publishedDate) {

        // console.log("authors ok");
        // console.log("authors ", DBPublish);

        const type = "PUBLISHEDDATE";
        const nameType = DBPublish.substring(0, 4) ;
        
        // console.log("authors ", nameType);

        const dataBD = await SettingsBook.count({
          where: {
            type: type,
            nameType: nameType,
          },
        });

        if (dataBD === 0) {
          await SettingsBook.create({
            type,
            nameType,
            descType: "Description for published",
            status: true,
          });
        }        
      }

//:::::::::::::  editoria
      let DBEditorial = dataBook.volumeInfo.publisher;
      let myString = "publisher";
      myString = myString.toUpperCase();
      // console.log("myString-->",myString)
      if (dataBook.volumeInfo.publisher) {
        const type = myString;
        const nameType = DBEditorial ;
        const dataBD = await SettingsBook.count({
          where: {
            type: type,
            nameType: nameType,
          },
        });

        if (dataBD === 0) {
          await SettingsBook.create({
            type,
            nameType,
            descType: "Description for publisher",
            status: true,
          });
        }   
      }

//::::::::  country
let DBRegist = dataBook.saleInfo.country;
      myString = "country";
      myString = myString.toUpperCase();
      // console.log("DBRegist-->",DBRegist)
      if (dataBook.saleInfo.country) {
        const type = myString;
        const nameType = DBRegist ;
        // console.log("myString*****",type)
        const dataBD = await SettingsBook.count({
          where: {
            type: type,
            nameType: nameType,
          },
        });

        if (dataBD === 0) {
          await SettingsBook.create({
            type,
            nameType,
            descType: "Description for country",
            status: true,
          });
        }   
      }
//::::::::::::::::::::::::::::::::: 

//::::::::  language
      DBRegist = dataBook.volumeInfo.language;
      myString = "language";
      myString = myString.toUpperCase();

      // console.log("language-->",DBRegist)
      if (dataBook.volumeInfo.language) {
        const type = myString;
        const nameType = DBRegist ;
        // console.log("myString*****",type)
        const dataBD = await SettingsBook.count({
          where: {
            type: type,
            nameType: nameType,
          },
        });

        if (dataBD === 0) {
          await SettingsBook.create({
            type,
            nameType,
            descType: "Description for country",
            status: true,
          });
        }   
      }
//::::::::::::::::::::::::::::::::: 
    }
  } catch (error) {
    console.error("Error  insert published:", error);
  }
};


module.exports = {
  insertDBCategories ,  
  insertDBAuthors,
  insertDB,
};
