const Stripe =  require("stripe");
const Sripe_SECRET = process.env.Sripe_SECRET;
const { envioCorreo } = require("../../controllers/EnvioCorreos/Send-Stripe/Post-Emails");
const { newPay } = require("../../controllers/Pay-Controllers/POST/Post-Pay"); 
const { succes } = require("../../handlers/MercadoPago/Rutas-GET/Get-Succes");
const stripe = new Stripe(Sripe_SECRET);



const createSession = async ({ items, email, idBook, user, userId }) => {
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
	  const idBooks = items.map((item) => item.idBook);
	  const session = await stripe.checkout.sessions.create({
		  line_items: lineItems,
		  mode: "payment",
		  success_url: "https://bookstorepf-production.up.railway.app//success?idBook=" + idBook + "&user=" + user + "&email=" + email + "&session_id={CHECKOUT_SESSION_ID}",
		  cancel_url: "https://bookstorepf-production.up.railway.app//cancel?user=" + user + "&email=" + email,
		  metadata: {
			  idBooks: idBooks.join(),
			  
		  },
	});


	  
	  senEmail({ email, idBook, session, user, userId,lineItems })

	  return ({
		  url: session.url	  });
   
  } catch (error) {
	throw new Error({error:error.message})
  }  
};

const senEmail = async ({ email, idBook, user, session, userId, lineItems }) => {
	
	const dataPay = {
	ip: "Stripe Default",
	orderNumber: "Stripe Default",
	metodo: "Stripe Prending",
	currentOperation: "Stripe Default",
	net_received_amount: session.amount_total,
	amount: '00.00',
	paymentStatus:"Pending",
	email:email,
	order:idBook,
	name:user,
	idpay:session.id,
	total_paid_amount:session.amount_total,
	operationType:session.currency,
	orderType:session.mode,
	data_aprove:session.payment_status,
	pqyment_method_option: session.payment_method_options,
	userId: userId,
	bookId: idBook,
	bookIds: session.metadata.idBooks.split(","),
	bookTitle: lineItems?.map((item) => item.price_data.product_data.name),
	quantity: lineItems?.map((item) => item.quantity),
	price: lineItems?.map((item) => item.price_data.unit_amount),
    typeMoney: lineItems?.map((item) => item.price_data.currency),

	
	}
	console.log(dataPay)
	await newPay(dataPay);
  try {
	await envioCorreo(dataPay)
	
  } catch (error) {
	  console.log(error.message)
	throw new Error({error:error.message})
	
  }

}

module.exports = {createSession}