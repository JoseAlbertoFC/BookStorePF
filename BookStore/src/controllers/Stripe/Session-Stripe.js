const Stripe =  require("stripe");
const Sripe_SECRET = process.env.Sripe_SECRET;
const {envioCorreo} = require("../../controllers/EnvioCorreos/Send-Stripe/Post-Emails");
const stripe = new Stripe(Sripe_SECRET);



const createSession = async ({items,email,idBook,user}) => {
  try {
    const lineItems = items.map((item) => ({
      price_data: {
        product_data: {
          name: item.name,
        },
        currency: item.typeMoney,
        unit_amount: item.price,
      },
      quantity: item.quantity,
    }));
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url:"http://localhost:8000/success?idBook="+idBook+"&user="+user+"&email="+email+"&session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:8000/cancel?user="+user+"&email="+email,
    });

    
    
    senEmail(email,idBook,user,session)

    return ({ url: session.url});
   
  } catch (error) {
    throw  Error({error:error.message})
  }  
};

const senEmail = async (email,idBook,user,session) => {
  const dataPay = {
    email:email,
    order:idBook,
    name:user,
    idpay:session.id,
    total_paid_amount:session.amount_total,
    operationType:session.currency,
    orderType:session.mode,
    data_aprove:session.payment_status,
    pqyment_method_option:session.payment_method_options,
  }

  try {
    await envioCorreo(dataPay)
    
  } catch (error) {
    throw Error({error:error.message})
    
  }

}

module.exports = {createSession}