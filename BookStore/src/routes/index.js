const { Router } = require("express");

const { PayMercado } = require("./MercadoPago");

const { booksRoutes } = require("./Books");

const { Whatsapp } = require("./Whatsapp");

//Esto viene de la carpete de handlers
//const ratingRoutes = require("./Rating");

const router = Router();

// Ejemplo:
//router.use("/", ratingRoutes);

//TODO Espacio de Dany Ruiz

//TODO ************************************************************************************************
//Mercado Pago

router.use("/", PayMercado);

//Whatssap

router.use("/", Whatsapp);


//TODO ************************************************************************************************
router.use("/", booksRoutes);

module.exports = router;
