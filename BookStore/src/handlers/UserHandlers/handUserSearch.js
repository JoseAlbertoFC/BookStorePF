const { getAllUsers,getUserByIdentificator, getUserByParams } = require("../../controllers/UserControllers/indexControllers.js")

//, 

const getUsers = async (req, res) => {
    const {page} = req.query
    const querysUser = req.body;
    const cantQuerys = Object.keys(querysUser).length;
    try {
        if (cantQuerys === 0) {
             const dataUsers = await getAllUsers(page);
             if (dataUsers.state) {
                res.status(200).json(dataUsers)            
            }else {
                res.status(400).json(dataUsers)
            }
        } else {
           const dataUsers = await getUserByParams(querysUser,page)
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
    const {idUser} = req.params;
    try {
            const dataUsers = await getUserByIdentificator(idUser);
            if (dataUsers.state) {
                res.status(200).json(dataUsers)            
            }else {
                res.status(400).json(dataUsers)
            }
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}


module.exports = {
    getUsers,
    getUsersbyId
}