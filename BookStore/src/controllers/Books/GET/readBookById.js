const { Book, Comment } = require("../../../db");

const readBookById = async (id) => {
    try {
      // console.log("id",id)
        return await Book.findByPk(id, {
          include: [
            {
              model: Comment,
              as: "comments",
            },
           
          ],
        });
      } catch (error) {
        // console.log(error.message);
        throw new Error({ error: error.message });
      }
}

module.exports = {
    readBookById
};