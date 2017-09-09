const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_live_P4qdlqHVllp6vfYsf5w0Uh8E'
    : 'sk_test_gZQDbT2ymZESi0FT5N45eQ5J';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;