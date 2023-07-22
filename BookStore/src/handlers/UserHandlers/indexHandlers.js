
const {getUsersbyId, getUsers}= require("./handUserSearch.js")
const {putEditUser} = require("./handUserEdit.js")
const {registerUser} = require("./handUserCreate.js")
const {deleteUser} = require("./handUserDel.js")
const { restoreUsers } = require("./handUserRestore.js")
const { getDeletedUsers } = require("./handReadDelUsers.js")
const {getActiveUsers} = require("./handActivateUser.js")
module.exports = {
    registerUser,
    getUsersbyId, 
    getUsers,
    putEditUser,
    deleteUser,
    restoreUsers,
    getDeletedUsers,
    getActiveUsers
}