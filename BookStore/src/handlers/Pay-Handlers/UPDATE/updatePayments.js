const { updatePay } = require("../../../controllers/Pay-Controllers/UPDATE/Update-Pay");


// Porfa crea un archivo para cada handler
const updatedataPay = async (req,res) => {
  const id  = req.params.id;
const {   
  paymentStatus
 } = req.body;


  
  

    try {
     

    const result = await updatePay({id,paymentStatus});
    
    if(result === null) throw new Error('Pago no encontrado.') 
    

    res.status(200).json(result);
   
    
  } catch (error) {
    res.status(400).json({message:error.message})
    
  }
}

module.exports ={updatedataPay}