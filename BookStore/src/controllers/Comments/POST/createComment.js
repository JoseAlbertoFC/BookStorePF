const { Comment, Book, User } = require("../../../db");

const createComment = async (rating, comment, bookId, userId) => {
  try {
    const newComment = Comment.create({
      include: [
        { model: Book, as: "books" },
        { model: User, as: "users" },
      ],
      rating,
      comment,
      bookId,
      userId,
    });

    return newComment;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

module.exports = {
  createComment,
};
