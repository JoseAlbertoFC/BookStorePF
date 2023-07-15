const { readBooks } = require("../../../controllers/Books/GET/readBooks");
const { readBookByName } = require("../../../controllers/Books/GET/readBookByName");
const { readBookByAuthor } = require("../../../controllers/Books/GET/readBookByAuthor")

const getBooks = async (req, res) => {
  const { title, author } = req.query;

  try {
  if (title) {
    const result = await readBookByName(title);
    res.status(200).json(result);
  } else if (author) {
    const result = await readBookByAuthor(author);
    res.status(200).json(result);
  } else {
    const result = await readBooks();
    res.status(200).json(result);
  }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getBooks,
};
