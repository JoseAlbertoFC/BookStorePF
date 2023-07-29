// TODO Librerias importadas
const { Router } = require("express")

const { ChatGptHandler } = require('../handlers/ChatGpt/POST/Chat-Gpt')

const ChatGptRoute = Router();

// TODO Rutas POST 

//TODO *************************************************************************************************


/**
 * @swagger
 * tags:
 *   name: Whatsapp
 *   description: Operaciones relacionadas con el envio de mensajes de WhatsApp.
 */

/**
 * @swagger
 * /SMS-Whatsapp:
 *   post:
 *     summary: Enviar un mensaje de WhatsApp
 *     description: Envia un mensaje de WhatsApp a traves de la API.
 *     tags: [Whatsapp]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sender:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: Mensaje de WhatsApp enviado exitosamente.
 *       400:
 *         description: Error en la solicitud.
 */
ChatGptRoute.post("/Chat", ChatGptHandler)

//TODO *************************************************************************************************


//TODO Exportamos Las rutas 

module.exports = { ChatGptRoute }