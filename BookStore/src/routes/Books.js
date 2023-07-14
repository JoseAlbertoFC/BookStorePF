const { Router } = require("express");
const { getBooks } = require("../handlers/Books/GET/getBooks");

const booksRoutes = Router();

booksRoutes.get("/getBooks", getBooks);

module.exports = { 
    booksRoutes 
};
