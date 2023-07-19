const { Book, Comment } = require("../../../db");
const { Op } = require("sequelize");

const readBookByQuery = async (querysVars) => {
  try {
    const whereCondition = {};
    const keyValues = [
      "country",
      "language",
      "publishedDate",
      "priceRange",
      "price",
      "status",
      "numPagesRange",
    ];

    Object.entries(querysVars).forEach(([key, value]) => {
      if (keyValues.includes(key)) {
        if (key === "priceRange") {
          const [priceRange1, priceRange2] = value.split("_");

          whereCondition["price"] = {
            [Op.between]: [parseFloat(priceRange1), parseFloat(priceRange2)],
          };
        } else if (key === "numPagesRange") {
          const [numPagesRange1, numPagesRange2] = value.split("-");

          whereCondition["numPages"] = {
            [Op.between]: [
              parseFloat(numPagesRange1),
              parseFloat(numPagesRange2),
            ],
          };
        } else {
          whereCondition[key] = value;
        }
      } else {
        whereCondition[key] = { [Op.iLike]: `%${value}%` };
      }
    });
    console.log(whereCondition);

    const findBook = await Book.findAll({
      where: whereCondition,
      include: [{ model: Comment, as: "comments" }],
    });
    if (findBook.length > 0) {
      return findBook;
    } else {
      throw Error("No se encontraron coincidencias.");
    }
  } catch (error) {
    console.log(error.message);
    throw new Error({ error: error.message });
  }
};

module.exports = {
  readBookByQuery,
};
