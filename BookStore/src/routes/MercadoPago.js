// TODO Librerias importadas
const {Router} = require("express")

const  {Payment}  = require("../handlers/MercadoPago/Rutas-POST/Post-Pago");
const { Webhook } = require("../handlers/MercadoPago/Rutas-POST/Post-Webhook");
const { succes } = require("../handlers/MercadoPago/Rutas-GET/Get-Succes");
const { failure } = require("../handlers/MercadoPago/Rutas-GET/Get-Failure");
const { pending } = require("../handlers/MercadoPago/Rutas-GET/Get-Pending");

const PayMercado = Router();

// TODO Rutas POST 

//TODO Documentacion de Swigger 

/**
 * @swagger
 * tags:
 *   name: Mercado Pago
 *   description: Rutas para procesar pagos con Mercado Pago
 */

/**
 * @swagger
 * /mercadoPago:
 *   post:
 *     summary: Realizar un pago con Mercado Pago
 *     description: Ruta para realizar un pago utilizando Mercado Pago.
 *     tags: [Mercado Pago]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               IdBook:
 *                 type: string
 *               carrito:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: string
 *                     quantity:
 *                       type: number
 *               typeMoney:
 *                 type: string
 *               userId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Pago realizado exitosamente.
 *       400:
 *         description: Error en la solicitud de pago.
 */

/**
 * @swagger
 * /webhook-pago:
 *   post:
 *     summary: Manejar webhook de Mercado Pago
 *     description: Ruta para manejar los eventos de webhook de Mercado Pago.
 *     tags: [Mercado Pago]
 *     parameters:
 *       - in: query
 *         name: payment
 *         schema:
 *           type: object
 *         description: Objeto que representa la información del pago recibido en el webhook.
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: El nombre del usuario asociado al pago.
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         description: El correo electrónico del usuario asociado al pago.
 *       - in: query
 *         name: IdBook
 *         schema:
 *           type: string
 *         description: El ID del libro asociado al pago.
 *       - in: query
 *         name: userId
 *         schema:
 *           type: string
 *         description: El ID del usuario asociado al pago.
 *       - in: query
 *         name: data.id
 *         schema:
 *           type: string
 *         description: El ID del pago en Mercado Pago.
 *     responses:
 *       200:
 *         description: Webhook procesado correctamente.
 *       400:
 *         description: Error en la solicitud del webhook.
 */

/**
 * @swagger
 * /succes:
 *   get:
 *     summary: Pago exitoso
 *     description: Ruta para mostrar la página de éxito después de un pago exitoso.
 *     tags: [Mercado Pago]
 *     responses:
 *       200:
 *         description: Pago completado exitosamente.
 */

/**
 * @swagger
 * /failure:
 *   get:
 *     summary: Pago fallido
 *     description: Ruta para mostrar la página de error después de un pago fallido.
 *     tags: [Mercado Pago]
 *     responses:
 *       200:
 *         description: Pago fallido.
 */

/**
 * @swagger
 * /pending:
 *   get:
 *     summary: Pago pendiente
 *     description: Ruta para mostrar la página de pago pendiente.
 *     tags: [Mercado Pago]
 *     responses:
 *       200:
 *         description: Pago pendiente.
 */


//TODO *************************************************************************************************
PayMercado.post("/mercadoPago",Payment)

PayMercado.post("/webhook-pago",Webhook)
//TODO *************************************************************************************************

// TODO Rutas GET

//TODO *************************************************************************************************
PayMercado.get("/succes",succes)

PayMercado.get("/failure",failure)

PayMercado.get("/pending",pending)

//TODO *************************************************************************************************

//TODO Exportamos Las rutas 

module.exports = {PayMercado}