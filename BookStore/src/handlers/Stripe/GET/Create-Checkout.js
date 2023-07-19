
const {createSession} = require("../../../controllers/Stripe/Session-Stripe");
const Checkout = async (req,res) => {
    const { items, email, idBook, user, userId }= req.body
  
  try{
      const result = await createSession({ items, email, idBook, user, userId })
    res.status(200).json(result)
  }catch(error){
    res.status(400).json({message:error.message})
  }

}

module.exports = {Checkout}