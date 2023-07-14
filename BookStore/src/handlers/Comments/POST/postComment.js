const {
  createComment,
} = require("../../../controllers/Comments/POST/createComment");

const postComment = async (req, res) => {
  const { rating, comment, bookId, userId} = req.body;
  try {
    const result = await createComment(rating, comment, bookId, userId);
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  postComment,
};
