// TODO Librerias importadas
const {Router} = require("express")

const WhatsappHandler = require('../handlers/WhatsappHandlers/Whatsapp-Handler')

const Whatsapp = Router();

// TODO Rutas POST 

//TODO *************************************************************************************************

Whatsapp.post("/SMS-Whatsapp",WhatsappHandler)

//TODO *************************************************************************************************


//TODO Exportamos Las rutas 

module.exports = {Whatsapp}