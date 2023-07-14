const Cancel = async (req,res) => {
  try{
   res.redirect('/cancel.html')
  }catch(error){
    res.status(400).json({message:error.message})
  }

}

module.exports = {Cancel}