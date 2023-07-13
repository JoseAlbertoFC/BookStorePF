const Stripe =  require("stripe");
const Sripe_SECRET = process.env.Sripe_SECRET;

const stripe = new Stripe(Sripe_SECRET);

const createSession = async ({name,price,typeMoney,cantidad}) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            product_data: {
              name: name,
            },
            currency: typeMoney,
            unit_amount: price,
          },
          quantity: cantidad,
        }
      ],
      mode: "payment",
      success_url: "http://localhost:8000/success",
      cancel_url: "http://localhost:8000/cancel",
    });

    
    return ({ url: session.url });
  } catch (error) {
    throw  Error({error:error.message})
  }
};

module.exports = {createSession}