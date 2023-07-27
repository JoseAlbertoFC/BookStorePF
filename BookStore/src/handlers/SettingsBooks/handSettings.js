const {getAllsettings} = require("../../controllers/settingsBooks/indexSettings.js")
const getSettings = async (req, res) => {
    const querysUser = req.body;
    const cantQuerys = Object.keys(querysUser).length;
    try {
           const dataUsers = await getAllsettings(querysUser)
           if (dataUsers.state) {
            res.status(200).json(dataUsers)            
        }else {
            res.status(400).json(dataUsers)
        }    
    }catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {getSettings};