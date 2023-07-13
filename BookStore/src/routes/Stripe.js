// TODO Librerias importadas
const {Router} = require("express")

const {Checkout} = require('../handlers/Stripe/GET/Create-Checkout.js')
const {Cancel} = require('../handlers/Stripe/GET/Cancel.js')
const {Succes} = require('../handlers/Stripe/GET/Succes.js')

const StripePay = Router();

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