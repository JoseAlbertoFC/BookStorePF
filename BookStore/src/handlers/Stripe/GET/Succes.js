const { envioCorreo } = require("../../../controllers/EnvioCorreos/Send-Succes/Post-Emails");
const { updatedataPay } = require("../../../handlers/Pay-Handlers/UPDATE/updatePayments");
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
  

    res.redirect('https://book-store-pf-gqng.vercel.app/')
  }catch(error){
    res.status(400).json({message:error.message})
  }

}

module.exports = {Succes}