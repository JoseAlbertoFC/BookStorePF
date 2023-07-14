const { Book } = require("../../../db")

const createBook = async (
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
) => {
  try {
    const newBook = await Book.create({
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
    });

    return newBook;
  } catch (error) {
    console.log(error.message)
    throw new Error({ error: error.message });
  }
};

module.exports = {
  createBook,
};