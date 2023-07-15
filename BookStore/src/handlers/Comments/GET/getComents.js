const {
  readComments,
} = require("../../../controllers/Comments/GET/readComments");

const getComments = async (req, res) => {
  try {
    const result = await readComments();
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getComments,
};
