//TODO Importaciones de Controllers
const {FAILURE_PAGO}= require('../../../controllers/MercadoPago/Failure-Pay')

const failure = async (req,res) => {
  try {
    const result = await FAILURE_PAGO()

    res.status(200).json(result)
    
  } catch (error) {
    res.status(400).json({message:error.message})
    
  }
}

module.exports = {failure}