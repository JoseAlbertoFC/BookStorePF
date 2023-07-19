// un controlador que llame a la api de chatgpt y que reciba un prompt y devuelva una respuesta

const { Configuration, OpenAIApi } = require('openai'); 

const configuration = new Configuration({
    organization: process.env.OPENAI_ORGANIZATION,
    apiKey: process.env.ChatGpt_Secret,

})

const openai = new OpenAIApi(configuration);

const ChatGptController = async (prompt) => {
  
    try { 
        const response = await openai.createCompletion({
            "model": "gpt-3.5-turbo",
            "messages": [{ "role": "user", "content": "hello" }],
            maxTokens: 256,
            temperature: 0.7,

        })

        console.log(response)
    } catch (error) {
        console.error('Error al llamar a la API de OpenAI:', error.message);
        throw new Error('Ocurrió un error al procesar la solicitud.');
    } 

}

module.exports = { ChatGptController }