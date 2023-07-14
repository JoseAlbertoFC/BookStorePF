const { Router } = require("express");

const { PayMercado } = require("./MercadoPago");

const { booksRoutes } = require("./Books");

const { Whatsapp } = require("./Whatsapp");

const {StripePay} = require('./Stripe');

const { commentsRoutes } = require("./Comments");

const router = Router();

//TODO Espacio de Dany Ruiz************************************************************************************************
//Mercado Pago

router.use("/", PayMercado);

//Whatssap

router.use("/", Whatsapp);

//Stripe

router.use('/',StripePay)

//TODO Espacio de Dany Ruiz************************************************************************************************

//TODO Espacio de Jose A Fuenmayor*****************************************************************************************
//************Books**************
router.use("/", booksRoutes);

router.use("/", commentsRoutes);

//TODO Espacio de Jose A Fuenmayor*****************************************************************************************

module.exports = router;
