
const {envioCorreo} = require('../../controllers/EnvioCorreos/Send-Stripe/Post-Emails.js')


const Freebook = async (req, res) => {

    try {
        const result = req.body;
        
        await envioCorreo(result, res);
        res.status(200).json({ message: "Correo enviado" });
    } catch (error) {
        res.status(500).json({ message: "Error al enviar el correo" });
    }

}

module.exports = { Freebook }