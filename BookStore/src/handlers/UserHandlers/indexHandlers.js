
const {getUsersbyId, getUsers}= require("./handUserSearch.js")
const {putEditUser} = require("./handUserEdit.js")
const {registerUser} = require("./handUserCreate.js")

module.exports = {
    registerUser,
    getUsersbyId, 
    getUsers,
    putEditUser
}