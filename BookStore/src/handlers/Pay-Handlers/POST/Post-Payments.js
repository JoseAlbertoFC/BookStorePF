const { newPay } = require("../../../controllers/Pay-Controllers/POST/Post-Pay")

const paymentNew = async (req,res) => {
  const {amount,paymentDate,paymentStatus,userId,IdBook} = req.body
  

  try {

    const result = await newPay(amount,paymentDate,paymentStatus,userId,IdBook)
    res.status(200).json(result)
    
  } catch (error) {
    res.status(400).json({message:error.message})
    
  }
}

module.exports ={paymentNew}