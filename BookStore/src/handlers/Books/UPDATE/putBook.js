const { updateBook } = require("../../../controllers/Books/UPDATE/updateBook");

const putBook = async (req, res, next) => {
  const { id } = req.params;
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
    numPages,
  } = req.body;

  try {
    const result = await updateBook(id, {
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
      numPages,
    });

    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({error: error.message});
  }
};

module.exports = {
  putBook,
};
