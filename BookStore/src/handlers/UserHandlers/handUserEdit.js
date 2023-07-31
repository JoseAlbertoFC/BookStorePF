const { updUserData } = require("../../controllers/UserControllers/indexControllers.js")

const putEditUser = async (req, res) => {
    const { id, name, birthday, country, phone, phoneCode, gender, dniPasaport, status, rol, photoUser, listWish } = req.body;
    try {
        const updatedData = {
            name, birthday, country, phone, phoneCode, gender, dniPasaport, status, rol, photoUser, listWish,
        }
        // console.log("hand-id",id);
        // console.log("hand-updatedData",updatedData);
        const userDataUpd = await updUserData(id, updatedData);
        if (userDataUpd.state) {
            res.status(200).json(userDataUpd);
        } else {
            res.status(400).json(userDataUpd);
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = {
    putEditUser
};