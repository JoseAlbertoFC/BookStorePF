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
    const newBook = new Book({
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

    const savedBook = await newBook.save();

    return savedBook;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createBook,
};