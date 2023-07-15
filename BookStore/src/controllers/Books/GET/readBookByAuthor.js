const { Book, Comment } = require("../../../db");

const readBookByAuthor = async (author) => {
  try {
    const result = await Book.findAll({
      include: [{ model: Comment, as: "comments" }],
    });

    const byAuthor = result.filter((book) =>
      book.author.join(",").toLowerCase().includes(author.toLowerCase())
    );

    return byAuthor;
  } catch (error) {
    console.log(error.message);
    throw new Error({ error: error.message });
  }
};

module.exports = {
  readBookByAuthor,
};
