const { Router } = require ("express");
const { postRegisterUser,    getUsersbyId,     getUsers,    putEditUser} = require("../handlers/UserHandlers/indexHandlers.js");


const routeUsers = Router();

routeUsers.post('/newUser',postRegisterUser)


routeUsers.get('/findUser',getUsers)
routeUsers.get('/findUser/:idUser',getUsersbyId)
routeUsers.put('/updUser',putEditUser)

module.exports = routeUsers