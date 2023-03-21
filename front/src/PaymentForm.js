import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#303238",
      fontSize: "16px",
      fontFamily: "sans-serif",
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "#CFD7DF"
      }
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238"
      }
    }
  }
};

function PaymentForm() {
  const [errorMessage, setErrorMessage] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      // Handle the payment process here using paymentMethod.id
      console.log(paymentMethod);
    }
  };

  return (
    <form className="PaymentForm" onSubmit={handleSubmit}>
      <div className="form-row">
      <p><label htmlFor="card-element">Veuillez entrer les informations de votre carte pour effectuer le paiement.</label></p>
        <CardElement id="card-element" options={CARD_ELEMENT_OPTIONS} />
      </div>
      <div className="form-row">
        <button type="submit" disabled={!stripe}>
          Payer
        </button>
      </div>
      {errorMessage && (
        <div className="form-row">
          <p className="error-message">{errorMessage}</p>
        </div>
      )}
    </form>
  );
}

export default PaymentForm;