const { destroyComment } = require("../../../controllers/Comments/DELETE/destroyComment");

const deleteComment = async (req, res) => {
    const { id } = req.params;

    try {
      const result = await destroyComment(id);
      if (result === 0) return res.status(400).json("This Comment was not deleted correctly");
      res.status(200).json("This Comment was successfully removed");
    } catch (error) {
        console.log(error.message);
      res.status(400).json({ error: error.message });
    }
}

module.exports = {
    deleteComment
};