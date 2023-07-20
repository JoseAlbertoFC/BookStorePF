const {envioCorreo} = require("../EnvioCorreos/Send-Manual/Post-Emails.js")

//envioCorreo (name,email,mensaje,subjet) 

const userNotification = async (dataNotification) => {
    try {
        console.log(dataNotification)
        const {idNotification,idUser,name,email,token}= dataNotification
        const subjet = "E-Books"         
        const mensaje = "E-Books portal de venta ed libros electronicos"

        if(idNotification === 1){
            subjet = "Bienvenido a E-Books"         
            mensaje = `Gracias por registrarte en el portal de `
        }

        await envioCorreo(name,email,mensaje,subjet)
        
        
        return true
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    userNotification
}