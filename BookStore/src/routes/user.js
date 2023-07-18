const { Router } = require ("express");
const { getUsersbyId,     getUsers,    putEditUser,registerUser} = require("../handlers/UserHandlers/indexHandlers.js");
const router = require("./index.js");


const routeUsers = Router();


// routeUsers.post("/newUser", postRegisterUser);
routeUsers.get('/findUser',getUsers)
routeUsers.get('/findUser/:idUser',getUsersbyId)
routeUsers.put('/updUser',putEditUser)
routeUsers.post('/newUser',registerUser)
//routeUsers.post('/loginUser',loginUser)

module.exports = {routeUsers}