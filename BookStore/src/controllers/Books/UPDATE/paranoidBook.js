const { Book } = require("../../../db");

const paranoidBook = async (id) => {
    try {
      const bookToRestore = await Book.findByPk(
        id,
        { paranoid: false },
        
      );
      return await bookToRestore.restore();
    } catch (error) {
      console.log(error.message)
      throw new Error({ error: error.message });
    }
  };

  module.exports = {
    paranoidBook
};