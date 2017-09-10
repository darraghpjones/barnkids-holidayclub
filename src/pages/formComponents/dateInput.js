import React from 'react';
import { Input } from 'react-materialize';

export class DateInput extends React.Component {

handleDOBValidation(event){
	var latestDate = new Date('Aug 31, 2013');
	var pickedDate = new Date(event.target.value);
	if (pickedDate.getTime() > latestDate.getTime()) {
	
		event.target.classList.remove('valid');
		event.target.classList.add('invalid');
	}
	else {

		event.target.classList.remove('invalid');
		event.target.classList.add('valid');
		
	}
	this.props.onChange(event);
}

componentDidMount () {
  /*  var $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });*/
}


render() {
	let _this = this;
	return (
		<Input type='date' className='datepicker' label={this.props.label} error={this.props.error} onChange={(event) => {this.handleDOBValidation(event)}} s={12} l={3}/>
		);
}
}