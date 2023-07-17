
const {postRegisterUser} = require("./handUserCreate.js")
const {getUsersbyId, getUsers}= require("./handUserSearch.js")
const {putEditUser} = require("./handUserEdit.js")


module.exports = {
    postRegisterUser,
    getUsersbyId, 
    getUsers,
    putEditUser
}