const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const port = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(bodyParser.json())

app.post('/payment-sheet', async (req, res) => {
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2025-01-27.acacia'}
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Number((req.body.amount * 100).toFixed(2)),
    currency: 'usd',
    customer: customer.id,
		payment_method_types: [
			'card'
		]
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
  });
});

app.listen(port);
