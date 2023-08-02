const { readBookById } = require("../../../controllers/Books/GET/readBookById");

const getBookById = async (req, res) => {
  const { id } = req.params;
  const { ids } = req.body; //array de ids

  try {
    let result;

    if (id) {
      result = await readBookById(id);
    } else if (ids && Array.isArray(ids)) {
      // se recorre el array para obtener un libro por cada id
      const promises = ids.map(async (singleId) => readBookById(singleId));
      result = await Promise.all(promises);
    } else {
      return res.status(400).json({ error: "Invalid request" });
    }

    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getBookById,
};