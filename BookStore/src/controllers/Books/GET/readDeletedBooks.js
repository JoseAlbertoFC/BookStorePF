const { Book } = require("../../../db")
const { Op } = require("sequelize")

const readDeletedBooks = async () => {
    try {
      const booksDeleted = await Book.findAll({
        where: {
          deletedAt: {
            [Op.not]: null,
          },
        },
        paranoid: false,
      });
  
      return booksDeleted;
    } catch (error) {
      console.log(error.message);
      throw new Error({ error: error.message });
    }
  };
  
  module.exports = {
    readDeletedBooks,
  };