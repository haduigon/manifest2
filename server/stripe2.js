// This is your test secret API key.
const stripe = require('stripe')('sk_test_51OP1pEIDi1lKDmgLd2beWHhTkhfVNn7ipVI23ww8gRusPKUK2WHg68YynY7RK8tI8326uHnE50ty3lLIC4YPtMaM00ePzMFw5H');
const express = require('express');
const app = express();
app.use(express.static('public'));
const https = require('https');
const fs = require('fs')


const YOUR_DOMAIN = 'http://localhost:3008';

const options = {
  key: fs.readFileSync('./localhost-key.pem'),
  cert: fs.readFileSync('./localhost.pem'),
};
// console.log(options.cert);
// app.use(https(options))

app.post('/create-checkout-session', async (req, res) => {
  console.log('works');
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1OP5OeIDi1lKDmgL0apF2IIb',
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    automatic_tax: {enabled: true},
  });

  res.redirect(303, session.url);
});

const serv = https.createServer(options, app)

serv.listen(3008, () => console.log('Running on port 3008'))
// app.listen(3008, () => console.log('Running on port 3008'));


// const express = require("express");
// const app = express();
// require('dotenv/config');
//  const cors = require("cors");

// // This is your test secret API key.
// const stripe = require("stripe")('sk_test_51OP1pEIDi1lKDmgLd2beWHhTkhfVNn7ipVI23ww8gRusPKUK2WHg68YynY7RK8tI8326uHnE50ty3lLIC4YPtMaM00ePzMFw5H');

// const PORT = 3008;
// app.use(express());
// app.use(express.json());

// app.use(cors({
//   origin: '*'
// }));

// const calculateOrderAmount = (items) => {
//   // Replace this constant with a calculation of the order's amount
//   // Calculate the order total on the server to prevent
//   // people from directly manipulating the amount on the client
//   return 1400;
// };
// app.get('/', () => console.log('ok test'));
// app.post("/create-payment-intent", async (req, res) => {
//   const { items } = req.body;
//   // res.setHeader("Access-Control-Allow-Origin", '*')
//   // Create a PaymentIntent with the order amount and currency
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: calculateOrderAmount(items),
//     currency: "eur",
//     // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
//     automatic_payment_methods: {
//       enabled: true,
//     }
//   });

//   res.send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });


// app.listen(PORT, express.urlencoded({ extended: true }), () => console.log("Node server listening on port 3008!"));