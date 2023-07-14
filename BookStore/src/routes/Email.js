const { Router } = require("express");

const {SendEmailHandler} = require('../handlers/Email/Email-Handler')


const Email = Router();

Email.post("/sendEmail", SendEmailHandler);

module.exports = { 
  Email 
};
