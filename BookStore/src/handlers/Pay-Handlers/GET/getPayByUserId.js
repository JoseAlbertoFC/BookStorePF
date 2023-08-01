const { readPayByUserId } = require("../../../controllers/Pay-Controllers/GET/readPayByUserId");

const getPayByUserId = async (req, res) => {
  const { id } = req.params;

  try {
   
    const result = await readPayByUserId(id);

    if(result.length === 0) throw new Error("Empty History")

    res.status(200).json(result);
  } catch (error) {
    
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
    getPayByUserId,
};

