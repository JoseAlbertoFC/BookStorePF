const { readpay } = require("../../../controllers/Pay-Controllers/GET/Get-Pays")

// Porfa crea un archivo para cada handler
const readallPays = async (req,res) => {
  
  

  try {

    const result = await readpay();

    if(result.length === 0) throw new Error("Lo siento No existen Pagos")

    res.status(200).json(result);
   
    
  } catch (error) {
    res.status(400).json({message:error.message})
    
  }
}

module.exports ={readallPays}