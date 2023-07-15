const {envioCorreo} = require("../../../controllers/EnvioCorreos/send-Succes/Post-Emails");
const Succes = async (req,res) => {
  const {idBook,user,email,session_id} = req.query
  

  try{
    const dataPay = {
      email:email,
      order:idBook,
      name:user,
      idpay:session_id,
      orderType:"Card",
      data_aprove:"Pagado",
    }
    envioCorreo(dataPay)
  

    res.redirect('/success.html')
  }catch(error){
    res.status(400).json({message:error.message})
  }

}

module.exports = {Succes}