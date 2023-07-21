const { userRegister } = require("./createUser.js");
const {
  getAllUsers,
  getUserByIdentificator,
  getUserByParams,
} = require("./getDataUsers.js");
const { updUserData } = require("./editUser.js");
const { userNotification } = require("./notification.js");
const { userDelete } = require("./delUser.js");
const { paranoidUser } = require("./restoreUser.js");
const { readDeletedUsers } = require("./readDelUsers.js");

module.exports = {
  userRegister,
  getAllUsers,
  getUserByIdentificator,
  getUserByParams,
  updUserData,
  userNotification,
  userDelete,
  paranoidUser,
  readDeletedUsers,
};
