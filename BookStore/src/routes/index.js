const { Router } = require("express");

const { PayMercado } = require("./MercadoPago");

const { booksRoutes } = require("./Books");

const { Whatsapp } = require("./Whatsapp");

const {StripePay} = require('./Stripe')

const { Email } = require("./Email");

const router = Router();

//TODO Espacio de Dany Ruiz

//TODO ************************************************************************************************
//Mercado Pago

router.use("/", PayMercado);

//Whatssap

router.use("/", Whatsapp);

//Stripe

router.use('/',StripePay)

//Correo

router.use("/", Email);

//TODO ************************************************************************************************

router.use("/", booksRoutes);

module.exports = router;
