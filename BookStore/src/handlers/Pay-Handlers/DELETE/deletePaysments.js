const { deletePayDB } = require("../../../controllers/Pay-Controllers/DELETE/Delete-Pay");

// Porfa crea un archivo para cada handler
const deletePayhandler = async (req, res) => {
  const userId = req.params.id;

  try {
    const result = await deletePayDB(userId);

    if (result !== 1) throw new Error("Pago no encontrado" );
    
    res.status(200).json({ deletePayDB: "Se Elimino con exito el pago" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { deletePayhandler };
