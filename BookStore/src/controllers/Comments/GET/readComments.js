const { Comment, Book, User } = require("../../../db");

const readComments = async () => {
    try {
        return await Comment.findAll({
          include: [
            {
              model: Book,
              as: "books",
            },
            {
              model: User,
              as: "user",
            },
          ],
        });
      } catch (error) {
        console.log(error.message);
        throw new Error({ error: error.message });
      }
}

module.exports = {
    readComments,
};