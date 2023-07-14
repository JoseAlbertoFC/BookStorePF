const { createBook } = require("../../../controllers/Books/POST/createBook");

const postBook = async (req, res, next) => {
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
        next(error.message);
        res.status(400).send(error.message);
      }
}

module.exports = {
    postBook
};