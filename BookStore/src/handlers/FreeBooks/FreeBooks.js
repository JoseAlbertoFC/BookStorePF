
const {envioCorreo} = require('../../controllers/EnvioCorreos/Send-Stripe/Post-Emails.js');
const { newPay } = require('../../controllers/Pay-Controllers/POST/Post-Pay.js');


const Freebook = async (req, res) => {
    const result = req.body;
    const dataFreebook = {
        ip: 'null',
        orderNumber: 'null',
        metodo: 'Free',
        currentOperation: 'null',
        net_received_amount: 0.00,
        amount: 0.00,
        paymentStatus:'free',
        email:result.email,
        order:'free',
        name:result.name,
        idpay:'null',
        total_paid_amount:0.00,
        operationType:'free',
        orderType:'free',
        data_aprove:'Aprovado',
        pqyment_method_option:'free',
        userId: result.userId,
        bookId:result.bookIds[0],
        quantity:result.bookIds.length,
        price: 0.00,
        typeMoney: 'free',
    
    }
    console.log(dataFreebook)
    try {
        await newPay(dataFreebook);
        await envioCorreo(result, res);
        res.status(200).json({ message: "Correo enviado" });
        
    } catch (error) {
        res.status(500).json({ message: "Error al enviar el correo" });
    }
    
}

module.exports = { Freebook }