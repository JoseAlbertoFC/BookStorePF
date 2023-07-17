const {readDeletedBooks} = require('../../../controllers/Books/GET/readDeletedBooks'); 

const getDeletedBooks = async (req, res) => {
    try {
        const result = await readDeletedBooks();
        if (result.length === 0) return res.status(404).json({ message: 'No se encontraron libros eliminados' });
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ message: error.message });

    }

};

module.exports = {getDeletedBooks};