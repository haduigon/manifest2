import React, { useState, useEffect, useRef } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe,
  useElements, } from "@stripe/react-stripe-js";
import axios from "axios";
import CheckoutForm from "./CheckoutForm";
import "./stripe.scss";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51OP1pEIDi1lKDmgLmDINBYKtseC24IjglH6BXaL1GaxAhY88kJBdFL16KfIxIUTXAIMZstIDaYx5gH9ypEa4lTtz00NUvA0dhq");
// const stripePromise = loadStripe("pk_live_51OP1pEIDi1lKDmgLtS21cdqmc6EMw2M5iFaVXV8mk970Nln9y34U4SgzYFu1zQVxyvbDc5QvCe3u8S4gma16bGM600EuOW1dm4");
console.log(stripePromise);

const apiUrl = 'https://ro.sms.destiny4you.com';
// const apiUrl = 'https://localhost:3008';

// const stripe = loadStripe('sk_test_51OP1pEIDi1lKDmgLd2beWHhTkhfVNn7ipVI23ww8gRusPKUK2WHg68YynY7RK8tI8326uHnE50ty3lLIC4YPtMaM00ePzMFw5H');
export const Stripe: React.FC = () => {
  const [clientSecret, setClientSecret] = useState("");
  const client = axios.create({
    baseURL: apiUrl,
  });
  const [showPayForm, setShowPayForm] = useState(false);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    client.post("/create-payment-intent", {
      headers: { "Content-Type": "application/json",           'Access-Control-Allow-Origin': '*'
    },
       items: { id: "xl-tshirt", amount: 2 }
    })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      })
  }, []);
  
  const appearance = {
    theme: 'stripe',
    labels: 'floating'
  };
  const options = {
    clientSecret,
    appearance,
  };

  
  // const elements = stripe.elements({
  //   mode: 'payment',
  //   amount: 1099,
  //   currency: 'usd',
  //   appearance,
  // })

  return (
   <div style={{ marginLeft: 10, maxWidth: 300}}>
    <button onClick={() => setShowPayForm(true)}>Pay</button>
    {showPayForm && (
       <div className="App">
        1 dollar
       {clientSecret && (
         
        <>
           <Elements options={options as any} stripe={stripePromise}>
           <CheckoutForm />
         </Elements>
         {/* <div ref={payRef} style={{width: 2, height: 2}}></div> */}
        </>
       )}
     </div>
    )}
    {/* <div ref={payRef}></div> */}
   </div>
  );
}