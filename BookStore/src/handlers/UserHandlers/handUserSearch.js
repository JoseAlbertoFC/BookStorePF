const { getAllUsers,getUserByIdentificator, getUserByParams } = require("../../controllers/UserControllers/indexControllers.js")

//, 

const getUsers = async (req, res) => {
    const querysUser = req.query;
    const cantQuerys = Object.keys(querysUser).length;
    try {
        if (cantQuerys === 0) {
             const dataUsers = await getAllUsers();
             if (dataUsers.state) {
                res.status(200).json(dataUsers)            
            }else {
                res.status(400).json(dataUsers)
            }
        } else {
           const dataUsers = await getUserByParams(querysUser)
           if (dataUsers.state) {
            res.status(200).json(dataUsers)            
        }else {
            res.status(400).json(dataUsers)
        }
        }
    }catch (error) {
        res.status(500).json({message: error.message})
    }
}


const getUsersbyId = async (req, res) => {
    const identificateVal = req.params;
    try {
            const dataUsers = await getUserByIdentificator(identificate);
    } catch (error) {
        
    }

}


module.exports = {
    getUsers,
    getUsersbyId
}