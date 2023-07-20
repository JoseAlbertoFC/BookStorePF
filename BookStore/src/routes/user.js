const { Router } = require ("express");
const { getUsersbyId,     getUsers,    putEditUser,registerUser,deleteUser} = require("../handlers/UserHandlers/indexHandlers.js");
const router = require("./index.js");


const routeUsers = Router();


// routeUsers.post("/newUser", postRegisterUser);
routeUsers.post('/findUser',getUsers)
routeUsers.post('/findUser/:idUser',getUsersbyId)
routeUsers.put('/updUser',putEditUser)
routeUsers.post('/newUser',registerUser)
routeUsers.delete('/delUser/:idUser',deleteUser) 
//routeUsers.post('/loginUser',loginUser)

module.exports = {routeUsers}