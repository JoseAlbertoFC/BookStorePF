const { readBooks } = require("../../../controllers/Books/GET/readBooks");
const {
  readBookByQuery,
} = require("../../../controllers/Books/GET/readBookByQuery");

const getBooks = async (req, res) => {
  const querysVars = req.query;
  try {

    if (querysVars) {
      const cantQuerys = Object.keys(querysVars).length;
      if (cantQuerys > 0) {
        const result = await readBookByQuery(querysVars);
        res.status(200).json(result);
      } else {
        const result = await readBooks();
        res.status(200).json(result);
      }
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
