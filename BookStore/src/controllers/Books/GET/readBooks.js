const { Book, Comment } = require("../../../db");
const api = require("../../../../api/Books.json");

const readBooks = async (page = 1) => {
  try {
    // console.log("page-->",page)
    const limit = process.env.PAGES_ITEMS ;
    const offset = (page - 1) * limit;    

    const verifyDb = await Book.count();

    if (verifyDb === 0) {
      // console.log("La base de datos está vacía. Se procederá a llenarla con la información de books.json.");
      readJson()
    } else {
       
      const  { rows: findBooks, count: totalBooks }= await Book.findAndCountAll({            
        offset: offset,
        limit: limit,
        order: [["title", "ASC"]],
        include: [{ model: Comment, as: "comments" }],
      })
      // console.log("********************************")
      if(findBooks.length > 0) {
        return {
          totalPages: (totalBooks),
          books: findBooks,
        };
      }else{        
          throw Error("No se encontraron registros.");
      }
      
    }
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

const readJson = async () => {

  for (let book of api) {
    const authors = book.volumeInfo.authors
      ? book.volumeInfo.authors.join(", ")
      : "Author not Available";

    const categories = book.volumeInfo.categories
      ? book.volumeInfo.categories.join(", ")
      : "Gender not Available";

    const apiData = {
      title: book.volumeInfo.title || "Title not Available",
      author: authors,
      country: book.accessInfo.country,
      language: book.volumeInfo.language,
      image: book.volumeInfo.imageLinks?.thumbnail || "Image not Available",
      gender: categories,
      sinopsis: book.volumeInfo.description || "Sinopsis not available.",
      price: book.saleInfo.listPrice?.amount || 0.0,
      publishedDate:
        book.volumeInfo.publishedDate || "Published Date not available",
      pdfLink: book.volumeInfo.previewLink,
      editorial: book.volumeInfo.publisher || "Publisher not available",
      numPages: book.pageCount || 0,
    };

    await Book.create(apiData);
    
  }

};

module.exports = {
  readBooks,
};
