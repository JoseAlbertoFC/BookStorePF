
const {userRegister}    = require('./createUser.js');
const {getAllUsers,getUserByIdentificator, getUserByParams} = require('./getDataUsers.js');
const {updUserData} = require('./editUser.js');

module.exports = {
    userRegister,
    getAllUsers,
    getUserByIdentificator, 
    getUserByParams,
    updUserData

}