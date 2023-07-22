const {userTokenActiv} = require("../../controllers/UserControllers/indexControllers.js")

const getActiveUsers = async (req, res) => {
    //const {valtoken} = req.query
    const querysUser = req.body;
    const cantQuerys = Object.keys(querysUser).length;
    try {
        if (cantQuerys > 0) {
            const dataUser = await userTokenActiv(querysUser)
            //console.log("******dataUser******",dataUser)
            if(dataUser.state){
                res.status(200).json(dataUser );        
            }else{
                res.status(400).json(dataUser );        
            }    
        }
        else {
            res.status(400).json({message: "there are no search criteria"})
        }
    }catch(error){
        res.status(500).json({error: error.mesage});
    }    
}
        
module.exports = {
    getActiveUsers
}