//TODO Importaciones de Controllers
const {FAILURE_PAGO}= require('../../../controllers/MercadoPago/Failure-Pay')

const failure = async (req,res) => {
  try {
    const result = await FAILURE_PAGO()

    res.redirect('https://book-store-client-coral.vercel.app/payment/failurepay')
    
  } catch (error) {
    res.status(400).json({message:error.message})
    
  }
}

module.exports = {failure}