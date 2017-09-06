var express = require('express');
var router = express.Router();

const stripe = require('../constants/stripe');

const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
}

router.route('/')
  .get(function(req, res, next) {
    res.send({ message: 'Hello !', timestamp: new Date().toISOString() })
  })

 .post(function(req, res)  {
    stripe.charges.create(req.body, postStripeCharge(res));
  });

module.exports = router;