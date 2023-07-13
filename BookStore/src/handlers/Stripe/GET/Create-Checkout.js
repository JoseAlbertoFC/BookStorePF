
const {createSession} = require("../../../controllers/Stripe/Session-Stripe");
const Checkout = async (req,res) => {
  const {name,price,typeMoney,cantidad}= req.body
  
  try{
    const result = await createSession({name,price,typeMoney,cantidad})
 
   res.status(200).json(result)
  }catch(error){
    res.status(400).json({message:error.message})
  }

}

module.exports = {Checkout}