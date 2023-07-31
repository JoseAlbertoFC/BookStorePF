//TODO Importaciones de Controllers
const {SUCCES_PAGO}= require('../../../controllers/MercadoPago/Succes-Pay')


const succes = async (req,res) => {
  try {
    const result = await SUCCES_PAGO()

    res.redirect('https://book-store-client-coral.vercel.app/')
    
  } catch (error) {
    res.status(400).json({message:error.message})
    
  }
}

module.exports = {succes}