const { User } = require("../../db");

const paranoidUser = async (id) => {
  try {
    const userToRestore = await User.findByPk(id, { paranoid: false });
    return await userToRestore.restore();
  } catch (error) {
    console.log(error.message);
    throw new Error({ error: error.message });
  }
};

module.exports = {
  paranoidUser,
};
