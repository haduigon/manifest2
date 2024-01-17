const express = require("express");
const app = express();
require('dotenv/config');
 const cors = require("cors");
 const https = require('https');
const fs = require('fs')
const PDFDocument = require('pdfkit');
const pdf = require('./createPdf');

const doc = new PDFDocument;
// const fs = require('fs');
// Saving the pdf file in root directory.
doc.pipe(fs.createWriteStream('example.pdf'));
 
// Adding functionality
doc 
    .fontSize(27)
    .text('This the article for GeeksforGeeks', 100, 100);
 
// Adding an image in the pdf.
 
// doc.image('download3.jpg', {
//     fit: [300, 300],
//     align: 'center',
//     valign: 'center'
// });
 
// doc
//     .addPage()
//     .fontSize(15)
//     .text('Generating PDF with the help of pdfkit', 100, 100); 
// Apply some transforms and render an SVG path with the 
// 'even-odd' fill rule
doc
    .scale(0.6)
    .translate(470, -380)
    .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
    .fill('red', 'even-odd')
    .restore(); 
// Add some text with annotations
doc
    .addPage()
    .fillColor('blue')
    .text('The link for GeeksforGeeks website', 100, 100)
 
    .link(100, 100, 160, 27, 'https://www.geeksforgeeks.org/test');
 
// Finalize PDF file
doc.end();
pdf.createPdf('test.pdf', ' it is a test pdf file')
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
const path = require('path');

app.get("/getfile", (req, res) => {
  // const fileLocation ="./example.pdf";
  // const file="example.pdf";
  // res.contentType("application/pdf");
  console.log(req.params);
  const fileLocation = path.resolve(__dirname, 'test.pdf');

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=example.pdf');
 res.sendFile(fileLocation,  (err) => {
                if (err) console.log(err);
            });
            // res.contentType("application/pdf");
            // res.status(200).sendFile(__dirname + './example.pdf');
});
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