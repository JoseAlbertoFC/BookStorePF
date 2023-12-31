const WhatsappSms = require("../../controllers/WhatsappControllers/WhatsappSms");
const twilio = require('twilio');

// Funcion para Enviar Mensajes de whatsapp Automatico.
const WhatsappHandler = async  (req, res,next) => {
    const message = req.body.message;
    const sender = req.body.sender;

    console.log(message,sender)
    try {
        const result = await WhatsappSms(message, sender)

       

        res.status(200).json({ Whatsapp: result });

    } catch (error) {
        res.status(404).json({ Whatsapp: "Mensaje no Enviado Error -->" ,error: error.message})
    }

}
module.exports = (req, res, next) => {
    twilio.webhook({ validate: false })(req, res, next);
    WhatsappHandler(req, res, next);
};


