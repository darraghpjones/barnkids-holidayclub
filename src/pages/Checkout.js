import React from 'react';
import {Button} from 'react-materialize';
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
	if (this.props.valid){
		return(
			<div>
			<p><b>Payment is required in full at time of booking.</b>  If you would like to use childcare vouchers, this will be refunded once the voucher is received.  
			Please contact the office for more information </p>
			<StripeCheckout
			    name={this.props.name}
			    description={this.props.description}
			    amount={fromEuroToCent(this.props.amount)}
			    email={this.props.email}
			    token={this.onToken(this.props.amount, this.props.description, () => this.props.submitBooking())}
			    currency={CURRENCY}
			    stripeKey={STRIPE_PUBLISHABLE}
			 >
			 	<Button type='submit'>Pay With Card</Button>
			 </StripeCheckout>
			 </div>
	  );
	}
	else {
		return (
			<div>
			<p><b>Payment is required in full at time of booking.</b>  If you would like to use childcare vouchers, this will be refunded once the voucher is received.  
			Please contact the office for more information </p>
			<Button disabled={true} type='submit'>Pay With Card</Button>
			</div>
			);
	}
}
}
  
//}
//export default Checkout;