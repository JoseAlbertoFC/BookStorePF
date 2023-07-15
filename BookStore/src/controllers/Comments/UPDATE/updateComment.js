const { Comment } = require("../../../db");

const updateComment = async (id, { rating, comment }) => {
  try {
    const commentToUpdate = await Comment.findByPk(id);

    if (!commentToUpdate) {
      throw new Error("El libro no fue encontrado");
    }
    commentToUpdate.rating = rating;
    commentToUpdate.comment = comment;

    await commentToUpdate.save();

    return commentToUpdate;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

module.exports = {
  updateComment,
};
