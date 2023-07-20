const { readBooks } = require("../../../controllers/Books/GET/readBooks");
const {
  readBookByQuery,
} = require("../../../controllers/Books/GET/readBookByQuery");

const getBooks = async (req, res) => {
  const {page} = req.query
    const querysVars = req.body;
    const cantQuerys = Object.keys(querysVars).length;

  try {
      if (cantQuerys === 0) {
        const result = await readBooks(page);
        res.status(200).json(result);
      }else{   
        console.log("page_2--> ",page )
        const result = await readBookByQuery(querysVars,page);
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
