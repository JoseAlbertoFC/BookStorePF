const { userRegister } = require("../../controllers/UserControllers/indexControllers.js")


const postRegisterUser = async(req, res) => {
    const {name, birthday, country, phone, phoneCode, gender, email, password, dniPasaport, status, rol, photoUser, listWish} = req.body

    const objRegister ={name, birthday,country, phone, phoneCode, gender, email, password, dniPasaport, status, rol, photoUser, listWish}
    try {
        const user = await userRegister(objRegister)
        if (user.state) {
            res.status(200).json(user)            
        }else {
            res.status(400).json(user)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = postRegisterUser