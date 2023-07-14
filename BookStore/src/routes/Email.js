const { Router } = require("express");

const {SendEmailHandler} = require('../handlers/Email/Email-Handler')


const Email = Router();

//TODO Documentacion de Swegger
/**
 * @swagger
 * /sendEmail:
 *   post:
 *     summary: Enviar correo electrónico
 *     description: Ruta para enviar un correo electrónico.
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mensaje:
 *                 type: string
 *               email:
 *                 type: string
 *               subject:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Correo electrónico enviado correctamente.
 *       400:
 *         description: Error en la solicitud de envío de correo electrónico.
 */

Email.post("/sendEmail", SendEmailHandler);

module.exports = { 
  Email 
};
