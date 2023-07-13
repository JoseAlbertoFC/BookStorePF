const { Router } = require("express");

const {PayMercado} = require("./MercadoPago")

const {Whatsapp} = require('./Whatsapp')

const {StripePay} = require('./Stripe')

//Esto viene de la carpete de handlers
//const ratingRoutes = require("./Rating");

const router = Router();

// Ejemplo:
//router.use("/", ratingRoutes);

//TODO Espacio de Dany Ruiz 

//TODO ************************************************************************************************
//Mercado Pago 

router.use('/',PayMercado)

//Whatssap

router.use('/',Whatsapp)

//Stripe

router.use('/',StripePay)




//TODO ************************************************************************************************


module.exports = router;