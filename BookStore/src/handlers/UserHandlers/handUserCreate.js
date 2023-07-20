const { userRegister } = require("../../controllers/UserControllers/indexControllers.js")


const registerUser = async(req, res) => {
    const {name, birthday, country, phone, phoneCode, gender, email, password, dniPasaport, status, rol, photoUser, listWish} = req.body
    
    // const objRegister ={name, birthday,country, phone, phoneCode, gender, email, password, dniPasaport, status, rol, photoUser, listWish}
    try {
        const user = await userRegister(name, birthday,country, phone, phoneCode, gender, email, password, dniPasaport, status, rol, photoUser, listWish)
        if (user.state) {
            res.status(200).json(user)            
        }else {
            res.status(400).json(user)
        }
    } catch (error) {
        // console.log(error)
        res.status(500).json(error)
    }
}

module.exports = {
    registerUser
}