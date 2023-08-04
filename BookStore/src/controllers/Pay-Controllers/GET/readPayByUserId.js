const { Pay, User, Book } = require("../../../db");

const readPayByUserId = async (id) => {
    try {
        const payments = await Pay.findAll({
            where: {
                userId: id,
            },
            include: [
                {
                    model: User, as: 'user',
                    attributes: ['name', 'email', 'rol']
                },
                {
                    model: Book, as: 'books',
                    attributes: ["id", 'title', 'country', 'author', 'price', 'image', "pdfLink"]
                },
            ]
        });
        //Retorna los pagos obtenidos.
        return payments
    } catch (error) {
        console.log(error.message);
        throw new Error({ error: error.message });
    }
};

module.exports = { readPayByUserId };
