const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const stripe = require('stripe');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

const PORT = process.env.PORT || 5000;

app.post('/payment', async (req, res) => {
  const { amount, currency, token } = req.body;

  console.log('Received payment request:', { amount, currency, token });

  try {
    const charge = await stripeInstance.charges.create({
      amount: amount,
      currency: currency,
      source: token.id, // Utilisez token.id au lieu de token
      description: 'Payment description',
    });

    console.log('Payment successful:', charge);
    res.status(200).json({ success: true, message: 'Payment successful', charge });
  } catch (error) {
    console.error('Error in payment processing:', error);
    res.status(500).json({ success: false, message: 'Payment failed', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});