const { Router } = require("express");

const {getSettings} = require("../handlers/settimgsBooks/indexHandlers.js")


const routeSettings = Router();

routeSettings.post("/findSetting", getSettings);


module.exports ={
    routeSettings
}