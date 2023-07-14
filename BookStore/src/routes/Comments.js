const { Router } = require("express");
const { postComment } = require("../handlers/Comments/POST/postComment")


const commentsRoutes = Router();

commentsRoutes.post("/postComment", postComment);


module.exports = { 
    commentsRoutes, 
};