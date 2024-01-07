const express = require("express");
const app = express();
require('dotenv/config');
 const cors = require("cors");
 const https = require('https');
const fs = require('fs')

// This is your test secret API key.
const stripe = require("stripe")('sk_test_51OP1pEIDi1lKDmgLd2beWHhTkhfVNn7ipVI23ww8gRusPKUK2WHg68YynY7RK8tI8326uHnE50ty3lLIC4YPtMaM00ePzMFw5H');

const PORT = 3008;
app.use(express());
app.use(express.json());

app.use(cors({
  origin: '*'
}));

const options = {
  key: fs.readFileSync('./localhost-key.pem'),
  cert: fs.readFileSync('./localhost.pem'),
};

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  // console.log(items[0]);
  return  items.amount * 200;
};
app.get('/', () => console.log('ok test'));
app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  console.log(items, 'items');
  // res.setHeader("Access-Control-Allow-Origin", '*')
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "eur",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    }
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

const serv = https.createServer(options, app)

serv.listen(3008, () => console.log('Running on port 3008'))
// app.listen(PORT, express.urlencoded({ extended: true }), () => console.log("Node server listening on port 3008!"));