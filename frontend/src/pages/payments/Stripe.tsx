import React, { useState, useEffect } from "react";
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
console.log(stripePromise);

const apiUrl = 'https://localhost:3008/';

// const stripe = loadStripe('sk_test_51OP1pEIDi1lKDmgLd2beWHhTkhfVNn7ipVI23ww8gRusPKUK2WHg68YynY7RK8tI8326uHnE50ty3lLIC4YPtMaM00ePzMFw5H');
export const Stripe: React.FC = () => {
  const [clientSecret, setClientSecret] = useState("");
  // const stripe = useStripe();
  // const elements = useElements();
  const client = axios.create({
    baseURL: apiUrl,
  });

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    client.post("/create-payment-intent", {
      // method: "POST",
      headers: { "Content-Type": "application/json",           'Access-Control-Allow-Origin': '*'
    },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => {
        // res.json();
        console.log(res, 'res');
        setClientSecret(res.data.clientSecret)

      })
      
      // .then((data: any) => {
      //   console.log(data.clientSecret);
        
      //   setClientSecret(data.clientSecret)
      
      // });
  }, []);

  const appearance = {
    theme: 'stripe',
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
    <div className="App">
      {clientSecret && (
        <>
        <Elements options={options as any} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
        </>
      )}
    </div>
  );
}