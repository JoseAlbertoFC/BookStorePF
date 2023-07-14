const { Router } = require("express");

const { PayMercado } = require("./MercadoPago");

const { booksRoutes } = require("./Books");

const { Whatsapp } = require("./Whatsapp");

const {StripePay} = require('./Stripe')

const router = Router();

//TODO Espacio de Dany Ruiz

//TODO ************************************************************************************************
//Mercado Pago

router.use("/", PayMercado);

//Whatssap

router.use("/", Whatsapp);

//Stripe

router.use('/',StripePay)

//TODO ************************************************************************************************

router.use("/", booksRoutes);

module.exports = router;
