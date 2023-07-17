const { updUserData} = require("../../controllers/UserControllers/indexControllers.js")

const putEditUser = async(req, res) => {
    const {id,name, birthday, country, phone, phoneCode, gender, dniPasaport, status, rol, photoUser, listWish} = req.body;
    try{
        const updatedData = {
            name, birthday, country, phone, phoneCode, gender, dniPasaport, status, rol, photoUser, listWish,
            }
        const userDataUpd = await updUserData(id, updatedData);
            if (userDataUpd.state){
                res.status(200).json(userDataUpd);
            }else{
            res.status(500).json(userDataUpd);
            }
    } catch(err){
        res.status(500).json(error)
    }
}


module.exports = {
    putEditUser
};