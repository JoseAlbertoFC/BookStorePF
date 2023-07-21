const {
  readDeletedUsers,
} = require("../../controllers/UserControllers/indexControllers");

const getDeletedUsers = async (req, res) => {
  try {
    const users = await readDeletedUsers();

    if (users.length === 0) throw Error("No hay usuarios para mostrar");

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getDeletedUsers,
};
