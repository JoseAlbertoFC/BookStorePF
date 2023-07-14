const { Book } = require("../../../db");

const updateBook = async (id, {
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
  }
) => {
    try {
        const book = await Book.findByPk(id);
    
        if (!book) {
          throw new Error("El libro no fue encontrado");
        }
    
        book.title = title;
        book.author = author;
        book.country = country;
        book.language = language;
        book.image = image;
        book.gender = gender;
        book.sinopsis = sinopsis;
        book.price = price;
        book.publishedDate = publishedDate;
        book.pdfLink = pdfLink;
        book.editorial = editorial;
        book.numPages = numPages;
    
        await book.save(); 
    
        return book;
      } catch (error) {
        throw new Error(error.message);
      }
};

module.exports = {
  updateBook,
};
