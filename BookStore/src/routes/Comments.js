const { Router } = require("express");
const { postComment } = require("../handlers/Comments/POST/postComment")
const { getComments } = require("../handlers/Comments/GET/getComents");


const commentsRoutes = Router();

commentsRoutes.post("/postComment", postComment);

commentsRoutes.get("/getComments", getComments);


module.exports = { 
    commentsRoutes, 
};