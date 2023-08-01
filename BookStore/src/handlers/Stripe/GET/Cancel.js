const {envioCorreo} = require("../../../controllers/EnvioCorreos/Send-Cancel/Post-Emails");
const Cancel = async (req,res) => {
  const {email,user} = req.query
  try{
    const dataCancel={
      email:email,
      name:user,
    }
    
    envioCorreo(dataCancel)
  
    res.redirect('https://book-store-client-coral.vercel.app/payment/failurepay')
  }catch(error){
    res.status(400).json({message:error.message})
  }

}

module.exports = {Cancel}