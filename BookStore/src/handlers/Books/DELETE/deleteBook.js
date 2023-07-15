const { destroyBook } = require("../../../controllers/Books/DELETE/destroyBook")

const deleteBook = async (req, res) => {
    const { id } = req.params;

    try {
      const result = await destroyBook(id);
      if (result === 0) return res.status(400).json("This Book was not deleted correctly");
      res.status(200).json("This Book was successfully removed");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

module.exports = {
    deleteBook,
}