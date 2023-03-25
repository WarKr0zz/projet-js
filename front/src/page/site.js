import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
import '../css/Site.css';
import Navbar from '../Navbar';

const stripePromise = loadStripe("pk_test_51Mo56HBiTBHI6ZG5i4bDu9WjE6NkFGozBRNNki3vm9ZYvpUb9XY2xFBX6eM6BRG04wMTGWwDV9TZ76ur20C1A64k00lMEAhDr4");

function Site() {
  return (
    <div className='prout'>
      <Navbar />
      <div className="site-container">
        <h1>Page de paiement</h1>
        <Elements stripe={stripePromise}>
          <PaymentForm />
        </Elements>
        
        <div className="info-text">
          Cette page est fausse, cependant le code marche bien, si vous mettez une carte au hasard (numéro éroné biensur) cela va effecter une demande sur l'api de stripe. <br></br>Vous pouvez noter la date et l'heure, et je pourrais vous montrer en classe que l'echange a bien eu lieux. <br></br> je ne peux pas utiliser de vrai carte car l'api voit que mon compte est en mode Test, une fois le site activé je pourrais le paremetrer dans Stripe afin de recevoir vraiment un virement <br></br>
        </div>
      </div>
    </div>
  );
};

export default Site;