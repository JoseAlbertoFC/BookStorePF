const { userDelete} = require("../../controllers/UserControllers/indexControllers.js")

const deleteUser = async(req,res) =>{
    
    const {idUser} = req.params ;
    try{
        
        // console.log("*DELETE *********************");
        // console.log(idHotel);
        const dataUser = await userDelete(idUser)
        if(dataUser.state){
            res.status(200).json(dataUser );        
        }else{
            res.status(400).json(dataUser );        
        }       
        
    }catch(error){
        res.status(500).json({error: error.mesage});
    }    
}


module.exports = {
    deleteUser   
}