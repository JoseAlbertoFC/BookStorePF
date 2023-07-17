const { paranoidBook } = require('../../../controllers/Books/UPDATE/paranoidBook')


const restoreBook = async (req, res) => {
    const { id } = req.params 

    try {
        const result = await paranoidBook(id)

        if (!id) return res.status(404).json({ message: 'Book not found'})

        res.status(200).json({ message: 'Book restored', result })

    } catch (error) {
        console.log(error.message)
        throw new Error({error:error.message})
    }
}

module.exports = { restoreBook }