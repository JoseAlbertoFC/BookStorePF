
const {createSession} = require("../../../controllers/Stripe/Session-Stripe");
const Checkout = async (req,res) => {
    const { items, email, idBook, user, userId }= req.body
  
  try{
      const result = await createSession({ items, email, idBook, user, userId })
      if(result.id) throw new Error("No se pudo crear el pago en la base de datos")
    res.status(200).json(result)
  } catch (error) {
      console.log(error.message)
    res.status(400).json({error:error.message})
  }

}

module.exports = {Checkout}