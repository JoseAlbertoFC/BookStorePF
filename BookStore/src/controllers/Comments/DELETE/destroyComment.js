const { Comment } = require("../../../db")

const destroyComment = async (id) => {
    try {
        const commentToDelete = await Comment.findByPk(id);
        if (commentToDelete) {
          await Comment.destroy({ where: { id: id } });
          return true;
        }
      } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
      }
}

module.exports = {
    destroyComment
}