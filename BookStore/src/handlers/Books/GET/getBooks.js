const { readBooks } = require("../../../controllers/Books/GET/readBooks");
const { readBookByName} = require("../../../controllers/Books/GET/readBookByName");

const getBooks = async (req, res, next) => {
  const { title } = req.query;

  try {
    const result = title ? await readBookByName(title) : await readBooks();
    res.status(200).json(result);
  } catch (error) {
    next(error.message);
    res.status(400).send(error.message);
  }
};

module.exports = {
  getBooks,
};
