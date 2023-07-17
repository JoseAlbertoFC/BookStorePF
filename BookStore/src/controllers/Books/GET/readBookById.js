const { Book, Comment } = require("../../../db");

const readBookById = async (id) => {
    try {
        return await Book.findByPk(id, {
          include: [
            {
              model: Comment,
              as: "comments",
            },
           
          ],
        });
      } catch (error) {
        console.log(error.message);
        throw new Error({ error: error.message });
      }
}

module.exports = {
    readBookById
};