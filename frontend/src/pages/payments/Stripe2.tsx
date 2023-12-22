import React, { useState, useEffect } from "react";
import "./App.scss";

const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3>Stubborn Attachments</h3>
      <h5>$20.00</h5>
      </div>
    </div>
    <form action="https://localhost:3008/create-checkout-session" method="POST">
      <button type="submit" onClick={() => console.log('sijfbvuhfdbvudf')}>
        Checkout
      </button>
    </form>
  </section>
);

const Message = ({ message }: any) => (
  <section>
    <p>{message}</p>
  </section>
);

export const Stripe = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}





























// import React, { useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, PaymentElement, useStripe,
//   useElements, } from "@stripe/react-stripe-js";
// import axios from "axios";
// import CheckoutForm from "./CheckoutForm";
// import "./stripe.scss";

// // Make sure to call loadStripe outside of a component’s render to avoid
// // recreating the Stripe object on every render.
// // This is your test publishable API key.
// const stripePromise = loadStripe("pk_test_51OP1pEIDi1lKDmgLmDINBYKtseC24IjglH6BXaL1GaxAhY88kJBdFL16KfIxIUTXAIMZstIDaYx5gH9ypEa4lTtz00NUvA0dhq");
// console.log(stripePromise);

// const apiUrl = 'http://185.70.185.9:3008/';

// // const stripe = loadStripe('sk_test_51OP1pEIDi1lKDmgLd2beWHhTkhfVNn7ipVI23ww8gRusPKUK2WHg68YynY7RK8tI8326uHnE50ty3lLIC4YPtMaM00ePzMFw5H');
// export const Stripe: React.FC = () => {
//   const [clientSecret, setClientSecret] = useState("");
//   // const stripe = useStripe();
//   // const elements = useElements();
//   const client = axios.create({
//     baseURL: apiUrl,
//   });

//   useEffect(() => {
//     // Create PaymentIntent as soon as the page loads
//     client.post("/create-payment-intent", {
//       // method: "POST",
//       headers: { "Content-Type": "application/json",           'Access-Control-Allow-Origin': '*'
//     },
//       body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
//     })
//       .then((res) => {
//         // res.json();
//         console.log(res, 'res');
//         setClientSecret(res.data.clientSecret)

//       })
      
//       // .then((data: any) => {
//       //   console.log(data.clientSecret);
        
//       //   setClientSecret(data.clientSecret)
      
//       // });
//   }, []);

//   const appearance = {
//     theme: 'stripe',
//   };
//   const options = {
//     clientSecret,
//     appearance,
//   };

//   // const elements = stripe.elements({
//   //   mode: 'payment',
//   //   amount: 1099,
//   //   currency: 'usd',
//   //   appearance,
//   // })

//   return (
//     <div className="App">
//       {clientSecret && (
//         <>
//         <Elements options={options as any} stripe={stripePromise}>
//           <CheckoutForm />
//         </Elements>
//         </>
//       )}
//     </div>
//   );
// }