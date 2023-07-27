const { Router } = require("express");
const {getSettings} = require("../handlers/SettingsBooks/indexHandlers.js");
const router = require("./index.js");

const routeSettings = Router();

routeSettings.post("/settingBooks", getSettings);
module.exports = { routeSettings };
