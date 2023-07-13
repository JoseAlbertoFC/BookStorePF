const Succes = async (req,res) => {
  try{
    
    res.redirect('/success.html')
  }catch(error){
    res.status(400).json({message:error.message})
  }

}

module.exports = {Succes}