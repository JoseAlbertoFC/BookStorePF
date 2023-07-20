const { readBookById } = require("../../../controllers/Books/GET/readBookById");

const getBookById = async (req, res) => {
  const { id } = req.params;

  try {
    //const result = await readBookById(id.toUpperCase());
    const result = await readBookById(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getBookById,
};
