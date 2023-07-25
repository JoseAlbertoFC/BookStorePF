const { Book, Comment } = require("../../../db");
const { Op } = require("sequelize");

const readBookByQuery = async (querysVars, page) => {
  try {

    const whereCondition = {};
    const keyValues = [
      "country",
      "language",     
      "priceRange",
      "price",
      "status",
      "numPagesRange",
    ];

    Object.entries(querysVars).forEach(([key, value]) => {
      switch (key) {
        case "priceRange": {
          const [priceRange1, priceRange2] = value.split("-");
          whereCondition["price"] = { [Op.between]: [parseFloat(priceRange1), parseFloat(priceRange2)], };
          break;
        }
        case "numPagesRange": {
          const [numPagesRange1, numPagesRange2] = value.split("-");
          whereCondition["numPages"] = { [Op.between]: [parseFloat(numPagesRange1), parseFloat(numPagesRange2)], };
          break;
        }
        default: {
          keyValues.includes(key)
            ? (whereCondition[key] = value)
            : (whereCondition[key] = { [Op.iLike]: `%${value}%` });
        }
      }
    });

    const pageSize = parseInt(process.env.PAGES_ITEMS);
    const offset = (parseInt(page) - 1) * pageSize;

    const { rows: findBook, count: totalBooks } = await Book.findAndCountAll({ 
      offset: offset,
      limit: pageSize,
      where: whereCondition,
      order: [["title", "ASC"]],
      include: [{ model: Comment, as: "comments" }],
    });

    if (findBook.length > 0) {
      const totalPages = Math.ceil(totalBooks / pageSize); 
      return ({ totalPages:totalPages, book: findBook });
    } else {
      return ({ mensaje: "No se encontraron coincidencias." });
    }
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

module.exports = {
  readBookByQuery,
};


// const readBookByQuery = async (querysVars,page = 1) => {
//   try {
//     const whereCondition = {};
//     const keyValues = [
//       "country",
//       "language",     
//       "priceRange",
//       "price",
//       "status",
//       "numPagesRange",
//     ];

   
// Object.entries(querysVars).forEach(([key, value]) => {
//   switch (key) {
//     case "priceRange": {
//       const [priceRange1, priceRange2] = value.split("-");
//       whereCondition["price"] = { [Op.between]: [parseFloat(priceRange1), parseFloat(priceRange2)], };
//       break;
//     }
//     case "numPagesRange": {
//       const [numPagesRange1, numPagesRange2] = value.split("-");
//       whereCondition["numPages"] = {[Op.between]: [parseFloat(numPagesRange1), parseFloat(numPagesRange2)], };
//       break;
//     }
//     default: {
//       // aplicamos el operador ternario
//           keyValues.includes(key)
//           ? (whereCondition[key] = value)
//           : (whereCondition[key] = { [Op.iLike]: `%${value}%` });
//     }
//   }
// });

//     // console.log(whereCondition);
//     const pageSize =process.env.PAGES_ITEMS;
//     const offset = (parseInt(page) - 1) * pageSize;
//           // console.log("page--> ",page )
//           // console.log("pageSize--> ",pageSize )
//           // console.log("offset--> ",offset )
//     const { rows: findBook, count: totalBooks } = await Book.findAndCountAll({ 
//       offset: offset,
//       limit: pageSize,
//       where: whereCondition,
//       order: [["title", "ASC"]],
//       include: [{ model: Comment, as: "comments" }],
      
//     });
//     if (findBook.length > 0) {
//       return {
//         totalPages: (totalBooks),
//         books: findBook,
//       };
//     } else {
//       throw Error("No se encontraron coincidencias.");
//     }
//   } catch (error) {
//     console.log(error.message);
//     throw new Error(error.message);
//   }
// };

// module.exports = {
//   readBookByQuery,
// };


// const { Book, Comment } = require("../../../db");
// const { Op } = require("sequelize");

