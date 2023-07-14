// TODO Librerias importadas
const {Router} = require("express")

const WhatsappHandler = require('../handlers/WhatsappHandlers/Whatsapp-Handler')

const Whatsapp = Router();

// TODO Rutas POST 

//TODO *************************************************************************************************


/**
 * @swagger
 * tags:
 *   name: Whatsapp
 *   description: Operaciones relacionadas con el envío de mensajes de WhatsApp.
 */

/**
 * @swagger
 * /SMS-Whatsapp:
 *   post:
 *     summary: Enviar un mensaje de WhatsApp
 *     description: Envía un mensaje de WhatsApp a través de la API.
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
Whatsapp.post("/SMS-Whatsapp",WhatsappHandler)

//TODO *************************************************************************************************


//TODO Exportamos Las rutas 

module.exports = {Whatsapp}