const { createBook } = require("../../../controllers/Books/POST/createBook");

const postBook = async (req, res) => {
    const {
        title,
        author,
        country,
        language,
        image,
        gender,
        sinopsis,
        price,
        publishedDate,
        pdfLink,
        editorial,
        numPages
      } = req.body;
      try {
        const result = await createBook(
            title,
            author,
            country,
            language,
            image,
            gender,
            sinopsis,
            price,
            publishedDate,
            pdfLink,
            editorial,
            numPages
        );
        res.status(200).json(result);
      } catch (error) {
        console.log(error.message)
        res.status(400).json({ error: error.message });
      }
}

module.exports = {
    postBook
};