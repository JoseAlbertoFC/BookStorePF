const { paranoidUser } = require("../../controllers/UserControllers/indexControllers");

const restoreUsers = async (req, res) => {
  const { id } = req.params;
  try {
 
    const result = await paranoidUser(id);
       if (!id) throw Error("Tienes que mandar un Id de usuario");
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { restoreUsers };
