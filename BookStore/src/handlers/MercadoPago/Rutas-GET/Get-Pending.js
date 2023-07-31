//TODO Importaciones de Controllers
const {PENDING_PAGO}= require('../../../controllers/MercadoPago/Pending-Pay')

const pending = async (req,res) => {
  try {
    const result = await PENDING_PAGO()

    res.redirect('https://book-store-pf-gqng.vercel.app/')
    
  } catch (error) {
    res.status(400).json({message:error.message})
    
  }
}

module.exports = {pending}