const { Book } = require("../../../db");

const destroyBook = async (id) => {
  try {
    const book = await Book.findByPk(id);
    if (book) {
      await Book.destroy({ where: { id: id } });
      return true;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  destroyBook,
};
