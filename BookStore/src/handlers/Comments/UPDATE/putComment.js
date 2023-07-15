const {
  updateComment,
} = require("../../../controllers/Comments/UPDATE/updateComment");

const putComment = async (req, res) => {
  const { id } = req.params;
  const { rating, comment } = req.body;

  try {
    const result = await updateComment(id, {
      rating,
      comment
    });

    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  putComment,
};
