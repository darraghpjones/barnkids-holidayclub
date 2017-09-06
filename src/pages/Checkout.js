import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from './constants/stripe';
import PAYMENT_SERVER_URL from './constants/server';

const CURRENCY = 'GBP';

const fromEuroToCent = amount => amount * 100;

export class Checkout extends React.Component {

successPayment (data) {
  console.log("Successful Payment - now storing date");
  this.props.submitBooking();
  //render confirm page.
  this.props.history.push('/confirm');
};

errorPayment (data ) {
  alert('Payment Error');
  console.log(data);
  //render contact us page.  
};

onToken = (amount, description, submitBooking) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromEuroToCent(amount)
    })
    .then(submitBooking())
    .then(this.props.history.push('/confirm'))
    .catch(this.errorPayment);

//const Checkout = ({ name, description, amount }) =>
render(){
	return(
		<StripeCheckout
		    name={this.props.name}
		    description={this.props.description}
		    amount={fromEuroToCent(this.props.amount)}
		    token={this.onToken(this.props.amount, this.props.description, () => this.props.submitBooking())}
		    currency={CURRENCY}
		    stripeKey={STRIPE_PUBLISHABLE}
		  />
  )
}
}
  
//}
//export default Checkout;