// Libreria a utilizar para el envio de correos automatico
const nodemailer = require("nodemailer");

// Dany trabajar en la coneccion de la data de usurio para llenar los campos de name ,from, to ,subjet

const envioCorreo = async (result, res) => {
    console.log('soy el mamalon email',result)
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
      const mailOptions = {
          from: process.env.USER_CORREO,
          to: `${result.email}`,
          subject: "Comprobante de pago Status Pending",
          html: `
        <head>
          <title>Recibo de Pago - E-Books Gracias por tu compra</title>
          <style>
            /* Estilos CSS para el recibo de pago */
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
            }
            .container {
              width: 600px;
              margin: 0 auto;
              padding: 20px;
              border: 1px solid #ccc;
            }
            h1, h2 {
              text-align: center;
              margin-bottom: 20px;
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
              table-layout: fixed;
            }
            .table th,
            .table td {
              padding: 8px;
              border: 1px solid #ccc;
              word-wrap: break-word;
              max-width: 150px;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .table th {
              background-color: #f0f0f0;
              text-align: left;
            }
            .total {
              text-align: right;
              font-weight: bold;
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
            <h1>Estas a un solo paso</h1>
            <!-- ... código anterior ... -->

            <h2>Detalles de la Compra</h2>
            <table class="table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Libro</th>
                  <th>LinK PDF</th>
                  <th>Cantidad</th>
                  <th>Precio Unitario</th>
                  <th>Moneda</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <!-- Loop para cada libro comprado -->
                ${result.bookIds.map((bookId, index) => `
                  <tr>
                    <td>${index + 1}</td>
                    <td>${result.bookTitle[index]}</td>
                    <td>${result.pdfLink[index]}</td>
                    <td>${result.quantity[index]?result.quantity[index]:result.quantity}</td>
                    <td>$${result.price[index]}</td>
                    <td>${result.typeMoney[index]}</td>
                    <td>$${result.price[index] * result.quantity[index]?result.price[index] * result.quantity[index]:0}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>

            <div class="total">
              <!-- Total a pagar -->
              Total: $${result.total_paid_amount}
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
        return
      } else {
        console.log("Correo enviado: " + info.response);
        return
      }
    });

  } catch (error) {
    throw new Error({ error: error.message });
  }
};

module.exports = { envioCorreo };
