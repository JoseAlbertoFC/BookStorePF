
const { envioCorreo } = require("../../controllers/EnvioCorreos/Send-Manual/Post-Emails");

const SendEmailHandler = async (req, res) => {
    const { mensaje,email, subject, name } = req.body;

    try {
      const result = await envioCorreo(name,email,mensaje,subject);

    
      res.status(200).json({ message: "Email enviado correctamente" })
      
    } catch (error) {
      throw new Error(error.message);
      
    }
   

}

module.exports = { SendEmailHandler };