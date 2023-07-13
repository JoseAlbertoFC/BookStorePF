// TODO Librerias importadas
const {Router} = require("express")

const  {Payment}  = require("../handlers/MercadoPago/Rutas-POST/Post-Pago");
const { Webhook } = require("../handlers/MercadoPago/Rutas-POST/Post-Webhook");
const { succes } = require("../handlers/MercadoPago/Rutas-GET/Get-Succes");
const { failure } = require("../handlers/MercadoPago/Rutas-GET/Get-Failure");
const { pending } = require("../handlers/MercadoPago/Rutas-GET/Get-Pending");

const PayMercado = Router();

// TODO Rutas POST 

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