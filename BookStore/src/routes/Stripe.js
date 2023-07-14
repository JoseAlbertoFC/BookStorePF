// TODO Librerias importadas
const {Router} = require("express")

const {Checkout} = require('../handlers/Stripe/GET/Create-Checkout.js')
const {Cancel} = require('../handlers/Stripe/GET/Cancel.js')
const {Succes} = require('../handlers/Stripe/GET/Succes.js')

const StripePay = Router();

//TODO Documentacion Sweger
/**
 * @swagger
 * tags:
 *   name: Stripe Pay
 *   description: Rutas para procesar pagos con Stripe
 */

/**
 * @swagger
 * /create-checkout-session:
 *   post:
 *     summary: Crear sesión de pago con Stripe
 *     description: Crea una sesión de pago con Stripe para iniciar el proceso de checkout.
 *     tags: [Stripe Pay]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               typeMoney:
 *                 type: string
 *               cantidad:
 *                 type: number
 *     responses:
 *       200:
 *         description: Sesión de pago creada exitosamente.
 *       400:
 *         description: Error en la solicitud.
 */

/**
 * @swagger
 * /cancel:
 *   get:
 *     summary: Cancelar proceso de pago
 *     description: Ruta para cancelar el proceso de pago.
 *     tags: [Stripe Pay]
 *     responses:
 *       200:
 *         description: Proceso de pago cancelado exitosamente.
 */

/**
 * @swagger
 * /success:
 *   get:
 *     summary: Pago exitoso
 *     description: Ruta para mostrar la página de éxito después de que el pago se haya completado correctamente.
 *     tags: [Stripe Pay]
 *     responses:
 *       200:
 *         description: Pago completado exitosamente.
 */

// TODO Rutas POST 

//TODO *************************************************************************************************

StripePay.post("/create-checkout-session",Checkout)

//TODO *************************************************************************************************

// TODO Rutas GET

//TODO *************************************************************************************************


StripePay.get("/cancel",Cancel)

StripePay.get("/success",Succes)


//TODO *************************************************************************************************

//TODO Exportamos Las rutas 

module.exports = {StripePay}