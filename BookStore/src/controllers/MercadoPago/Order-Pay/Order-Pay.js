//TODO Librerias y VAriables del .env
require("dotenv").config();
const mercadopago = require("mercadopago");
const { ACCES_TOKEN } = process.env;

// Esta funcion genera una orden de pago recibe el carrito y el userid junto con el bokingid para poder registrar los datos de la reserva que el cliente esta haciendo.
const ORDER_PAY = async ({ carrito, name, email, IdBook, typeMoney, userId }) => {
  console.log(carrito, "Soy tu sexy Carrito")
    mercadopago.configure({
        access_token: ACCES_TOKEN,
    });
    const items = carrito.map((item) => ({
        IdBook: item.IdBook,
        title: item.nombre,
        unit_price: item.precio,
        currency_id: item.typeMoney,
        quantity: item.cantidad,
        category_id: item.IdBook,
        description: item.description,
        pdfLink: item.pdfLink
    }));
    
    
  // En este apartado en desarrollo tienes que correr el ngrok en una consola aparte y copiar el url que te brinda.
    const notificationURL ="https://bookstorepf-production.up.railway.app/webhook-pago";
  const additionalData = {
    IdBook: IdBook,
    email: email,
    name: name,
    userId: userId,
      
     
      
     


    };
 
  const encodedData = Object.entries(additionalData)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

  const notificationURLWithParams = `${notificationURL}?${encodedData}`;

  const compra = await mercadopago.preferences.create({
    items,
    back_urls: {
        success: "https://bookstorepf-production.up.railway.app/succes",
        failure: "https://bookstorepf-production.up.railway.app/failure",
        pending: "https://bookstorepf-production.up.railway.app/pending",
    },
    notification_url: notificationURLWithParams,
  });
  const status = {
    status: compra.body.redirect_urls,
    linkPago: compra.body.init_point,
    items: compra.body.items.map((item) => ({ title: item.title })),
  };
  return status;
};

module.exports = {ORDER_PAY};
