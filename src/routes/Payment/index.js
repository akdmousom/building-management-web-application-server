const express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const router = express.Router();
const stripe = require("stripe")('sk_test_51OFAsbKm9nzjtjZkI76F25YQwEXTuc0rrf3OUmny48zbV0sQi4o1SEaBUKa6z0p276gupfS5PX1Lpih2wS307KMx00jF2XTSiA');




router.post("/api/v1/create-payment-intent",  async (req, res) => {
  const items = req.body;
  const rent = items.rent
  const roomRent = parseInt(rent*100)

  // // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: roomRent,
    currency: "usd",
    payment_method_types: [
      "card"
    ],
  
    
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    // automatic_payment_methods: {
    //   enabled: true,
    // },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

  module.exports = router