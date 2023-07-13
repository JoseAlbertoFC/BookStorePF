//TODO Importacion de controllers
const {WEBHOOK_PAY} = require('../../../controllers/MercadoPago/Order-Pay/Webhook-Pay')

const Webhook = async (req,res) => {
  const payment = req.query;
  const name = req.query['name']
  const email = req.query['email']
  const IdBook =req.query['IdBook']
  const userId = req.query['userId']
  const id = req.query['data.id']

  try {
    const result = await WEBHOOK_PAY({
      payment,
      name,
      email,
      IdBook,
      userId,
      id,
    })
      
    res.status(200).json(result)
    
  } catch (error) {
    res.status(400).json({message:error.message})
    
  }
}

module.exports = {Webhook}