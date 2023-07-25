// Llamamos a las Respuestas de Whatsapp
const automaticResponses = require('../WhatsappControllers/Response');
const twilio = require('twilio');
const accountSid = process.env.WHATSAPP_CLIENT;
const authToken = process.env.WHATSAPP_SECRET;
const client = twilio(accountSid, authToken);

// Función para Enviar Mensajes de WhatsApp Automáticos.
const WhatsappSms = (message, sender) => {
    const options = [
        'hola',
        'libros',
        'disponibilidad',
        'precios',
        'comprar',
        'cancelar',
        'ayuda',
        'adios'
    ]

    try {

        switch (message) {
            case 'hola':
                const message1 = client.messages.create({
                    from: 'whatsapp:+14155238886',
                    to: sender,
                    body: automaticResponses[0].response
                });
                return { message: 'Mensaje Enviado', Options: options, Message: automaticResponses[0].response };
            case 'libros':
                const message2 = client.messages.create({
                    from: 'whatsapp:+14155238886',
                    to: sender,
                    body: automaticResponses[1].response
                });
                return { message: 'Mensaje Enviado', Options: options, Message: automaticResponses[1].response };
            case 'disoponibilidad':
                const message3 = client.messages.create({
                    from: 'whatsapp:+14155238886',
                    to: sender,
                    body: automaticResponses[2].response
                });
                return { message: 'Mensaje Enviado', Options: options, Message: automaticResponses[2].response };
            case 'precios':
                const message4 = client.messages.create({
                    from: 'whatsapp:+14155238886',
                    to: sender,
                    body: automaticResponses[3].response
                });
                return { message: 'Mensaje Enviado', Options: options, Message: automaticResponses[3].response };
            case 'comprar':
                const message5 = client.messages.create({
                    from: 'whatsapp:+14155238886',
                    to: sender,
                    body: automaticResponses[4].response
                });
                return { message: 'Mensaje Enviado', Options: options, Message: automaticResponses[4].response };
            case 'cancelar':
                const message6 = client.messages.create({
                    from: 'whatsapp:+14155238886',
                    to: sender,
                    body: automaticResponses[5].response
                });
                return { message: 'Mensaje Enviado', Options: options, Message: automaticResponses[5].response };
            case 'ayuda':
                const message7 = client.messages.create({
                    from: 'whatsapp:+14155238886',
                    to: sender,
                    body: automaticResponses[6].response
                });
                return { message: 'Mensaje Enviado', Options: options, Message: automaticResponses[6].response };
            case 'adios':
                const message8 = client.messages.create({
                    from: 'whatsapp:+14155238886',
                    to: sender,
                    body: automaticResponses[7].response
                });
                return { message: 'Mensaje Enviado', Options: options, Message: automaticResponses[7].response };
            default:
                const message9 = client.messages.create({
                    from: 'whatsapp:+14155238886',
                    to: sender,
                    body: automaticResponses[8].response
                });
                return { message: 'Disculpa, no he entendido tu pregunta. Por favor, Elije una opcion Valida.', Options: options, Message: automaticResponses[8].response };
        }

     
    } catch (error) {
      return ({ error: error.message });
    }
      
};

module.exports = WhatsappSms;



   
