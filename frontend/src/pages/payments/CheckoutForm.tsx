import React, { useEffect, useRef, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  // PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  // const elements = stripe.elements({
  //   mode: 'payment',
  //   amount: 1099,
  //   currency: 'usd',
  //   appearance,
  // })

  const [message, setMessage] = useState(null) as any;
  const [isLoading, setIsLoading] = useState(false);

  const [paymentRequest, setPaymentRequest] = useState(null);


  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }: any)  => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });

  }, [stripe]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    console.log(elements, 'elements');
    
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "https://localhost:3000/#/horo?test='",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "accordion",
    paymentMethodOrder: ['card', 'apple_pay', 'google_pay']
  }

  const payRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (payRef.current) {
      setTimeout(() => {
        payRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 1800)
      
    }
  }, [])

  return (
   <>
      <form id="payment-form" onSubmit={handleSubmit} >
      {/* <PaymentRequestButtonElement options={{paymentRequest} as any}/> */}
      <PaymentElement id="payment-element" options={paymentElementOptions as any} />
      <button disabled={isLoading || !stripe || !elements} id="submit" >
        <span id="button-text" >
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
    <div ref={payRef}></div>
   </>
  );
}