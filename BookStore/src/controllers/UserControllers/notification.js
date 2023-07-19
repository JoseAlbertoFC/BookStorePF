const {envioCorreo} = require("../EnvioCorreos/Send-Manual/Post-Emails.js")

//envioCorreo (name,email,mensaje,subjet) 

const userNotification = async (dataNotification) => {
    try {
        console.log(dataNotification)
        const {idNotification,idUser,name,email,token}= dataNotification

        if(idNotification === 1){
            let mensaje = "mensaje de prueba del cuerpo del texto"
            let subjet = "correo de bienvenida"
            await envioCorreo(name,email,mensaje,subjet)
        }
        
        //await envioCorreo("<NAME>","<EMAIL>","Mensaje de prueba","Mensaje de prueba")
        return true
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    userNotification
}