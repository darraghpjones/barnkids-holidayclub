import React, { Component } from 'react';
import {Button} from 'react-materialize';

export class ConfirmBooking extends Component {

	render() {
		return (

			<div>
				<h5>Thank You - Your booking has been submitted</h5>

				<Button onClick={()=> this.props.history.push('/')}>Start Again</Button>
			</div>
			)}
}