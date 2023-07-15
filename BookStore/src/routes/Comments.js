const { Router } = require("express");
const { postComment } = require("../handlers/Comments/POST/postComment")
const { getComments } = require("../handlers/Comments/GET/getComents");
const { putComment } = require("../handlers/Comments/UPDATE/putComment")
const { deleteComment } = require("../handlers/Comments/DELETE/deleteComment")


const commentsRoutes = Router();

commentsRoutes.post("/postComment", postComment);

commentsRoutes.get("/getComments", getComments);

commentsRoutes.put("/updateComment/:id", putComment);

commentsRoutes.delete("/deleteComment/:id", deleteComment);


module.exports = { 
    commentsRoutes, 
};