const { Book, Comment } = require("../../../db");
const { Op } = require("sequelize");

const readBookByName = async (title) => {
    try {                                           
        const result = await Book.findAll({        
          where: {
            title: {
              [Op.iLike]: `%${title}%`,
            },
          },
          include: [{ model: Comment, as: "comments" }],                       
        });                                        
        return result;
      } catch (error) {
        throw new Error({ error: error.message});
      }
}

module.exports = {
    readBookByName
};