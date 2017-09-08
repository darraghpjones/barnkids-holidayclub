const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'https://apps.barnkids.co.uk/payment'
  : 'http://localhost:3000/payment';

export default PAYMENT_SERVER_URL;