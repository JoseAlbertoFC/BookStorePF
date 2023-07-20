// Libreria a utilizar para el envio de correos automatico
const nodemailer = require("nodemailer");

const envioCorreo = async (result, res) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.USER_CORREO,
                pass: process.env.USER_PASS_CORREO,
            },
            secure: true, // Habilitar la conexión segura
        });

        const name = `${result.name}`;
        const items = result.title.map((title, index) => ({
            title: title,
            quantity: result.quantity[index],
            unit_price: result.unit_price[index],
        }));

        const mailOptions = {
            from: "hoteldeveloperfull@gmail.com",
            to: `${result.email}`,
            subject: "Comprobante de pago",
            html: `
      <head>
        <title>Recibo de Pago - E-Books Gracias por tu compra</title>
        <style>
            /* Estilos CSS para el recibo de pago */
            body {
                font-family: Arial, sans-serif;
            }
            .container {
                width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ccc;
            }
            h1, h2 {
                text-align: center;
            }
            .info {
                margin-bottom: 20px;
            }
            .info p {
                margin: 5px 0;
            }
            .table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 20px;
                table-layout: fixed; /* Fijar el ancho de las columnas */
            }
            .table th,
            .table td {
                padding: 8px;
                border: 1px solid #ccc;
                word-wrap: break-word; /* Ajustar el texto automáticamente */
                max-width: 150px; /* Máximo ancho de las celdas */
                overflow: hidden; /* Ocultar contenido que excede el ancho máximo */
                text-overflow: ellipsis; /* Agregar puntos suspensivos (...) para contenido truncado */
            }
            .table th {
                background-color: #f0f0f0;
                text-align: left;
            }
            .total {
                text-align: right;
            }
    
            /* Estilos CSS para la imagen */
            .image-container {
                text-align: center;
                margin-bottom: 20px;
            }
            .image-container img {
                max-width: 100%;
                height: auto;
                border: 1px solid #ccc;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
            }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Recibo de Pago</h1>
          <p><strong>Gracias por tu compra en E-books</strong></p>
          <p>Dirección Libreria, Ciudad Monterrey</p>
          <p>Teléfono: 81-23-43-43-45</p>
          <p>Gracias por tu Compra ${name}</p>
          <h2>Detalles de la Compra</h2>
          <table class="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              ${items
                    .map(
                        (item, index) => `
                    <tr>
                      <td>${index + 1}</td>
                      <td>${item.title}</td>
                      <td>${item.quantity}</td>
                      <td>$${item.unit_price}</td>
                      <td>$${(item.quantity * item.unit_price).toFixed(2)}</td>
                    </tr>
                  `
                    )
                    .join("")}
            </tbody>
          </table>
          <div class="total">
            <strong>Total a pagar: $${result.total_paid_amount}</strong>
          </div>
          <div class="image-container">
            <img src="https://th.bing.com/th/id/R.f54d2bb15ee1f6dea4c14bf2ca44e9ce?rik=XlqxAjggAgf%2b0g&riu=http%3a%2f%2fwww.writersblockbookstore.com%2fsites%2fwritersblockbookstore.com%2ffiles%2fBookstore+image+2017.jpg&ehk=KksPEtWr1lpM2zUm3h2O87075ImBAgViDTeJd%2fLdrSQ%3d&risl=&pid=ImgRaw&r=0"/>
          </div>
        </div>
      </body>
      `,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                return;
            } else {
                console.log("Correo enviado: " + info.response);
                return;
            }
        });
    } catch (error) {
        throw new Error({ error: error.message });
    }
};

module.exports = { envioCorreo };
