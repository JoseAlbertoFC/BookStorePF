const { Router } = require("express");

const {Freebook} = require('../handlers/FreeBooks/FreeBooks.js')


const Freebooks = Router();


Freebooks.post("/freeBooks", Freebook);
    
module.exports = { 
    Freebooks 
};
