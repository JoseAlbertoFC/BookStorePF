const { ChatGptController } = require('../../../controllers/Chat-Gpt/POST/Chatgpt')
// handler para mandar datos a el controller de chat gpt

const ChatGptHandler = async (req, res) => {
    const { prompt } = req.body

    if (!prompt) return res.status(404).json({Error:'No se ha enviado ningun mensaje'})

try {
    const response = await ChatGptController(prompt)
        res.status(200).json({response})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

module.exports = {ChatGptHandler}