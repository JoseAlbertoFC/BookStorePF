const { Router } = require("express");

const {SendEmailHandler} = require('../handlers/Email/Email-Handler')


const Email = Router();

//TODO Documentacion de Swegger
/**
 * @swagger
 * /sendEmail:
 *   post:
 *     summary: Enviar correo electronico
 *     description: Ruta para enviar un correo electronico.
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
 *         description: Correo electronico enviado correctamente.
 *       400:
 *         description: Error en la solicitud de envío de correo electronico.
 */

Email.post("/sendEmail", SendEmailHandler);

module.exports = { 
  Email 
};
