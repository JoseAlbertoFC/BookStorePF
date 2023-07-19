//TODO Aqui importaremos todos los controllers

const {ORDER_PAY} = require('../../../controllers/MercadoPago/Order-Pay/Order-Pay')

const Payment = async (req,res) => {
    const { name, email, IdBook, carrito,typeMoney,userId}= req.body


  try {

      const result = await ORDER_PAY({ carrito, name, email, IdBook, typeMoney, userId })

    


    res.status(200).json(result)
    
  } catch (error) {
    res.status(400).json({message:error.message})
    
  }
}


module.exports = {Payment}