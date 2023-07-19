// Libreria a utilizar para el envio de correos automatico
const nodemailer = require("nodemailer");
//
// Dany trabajar en la coneccion de la data de usurio para llenar los campos de name ,from, to ,subjet

//TODO El objeto dataPay solo viene por la parte de Pago 

const envioCorreo = async (name,email,mensaje,subjet, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_CORREO,
        pass: process.env.USER_PASS_CORREO,
      },
      secure: true, // Habilitar la conexión segura
    });

    
    const mailOptions = {
      from: process.env.USER_CORREO,
      to: `${email}`,
      subject: `${subjet}`,
      html: `
      <head>
        <title>Mensaje de E-Books</title>
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
            }
            .table th, .table td {
                padding: 8px;
                border: 1px solid #ccc;
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
            <h1>Mensaje de  E-Books</h1>
           
                <p><strong>Querido(a) ${name}</strong></p>
                
           
            <h2>Mensaje:</h2>
            <p>${mensaje}</p>
           
           
    
           
        </div>
    </body>
      `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
       
        console.log(error);
      } else {
        console.log("Correo enviado: " + info.response);
      
      }
    });

  } catch (error) {
    throw new Error({ error: error.message });
  }
};

module.exports = { envioCorreo };
