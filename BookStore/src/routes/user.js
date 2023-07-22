const { Router } = require("express");
const {
  getUsersbyId, getUsers,
  registerUser,putEditUser,
  deleteUser, restoreUsers, getDeletedUsers,
  getActiveUsers
} = require("../handlers/UserHandlers/indexHandlers.js");
const router = require("./index.js");

const routeUsers = Router();


// routeUsers.post("/newUser", postRegisterUser);
routeUsers.post("/findUser", getUsers);
routeUsers.post("/findUser/:idUser", getUsersbyId);
routeUsers.post("/newUser", registerUser);
routeUsers.post('/activateUser',getActiveUsers)
routeUsers.put("/updUser", putEditUser);
routeUsers.delete("/delUser/:idUser", deleteUser);
routeUsers.put("/restoreUser/:id", restoreUsers);
routeUsers.get('/findDeletedUser',getDeletedUsers)

//routeUsers.post('/loginUser',loginUser)

module.exports = { routeUsers };
