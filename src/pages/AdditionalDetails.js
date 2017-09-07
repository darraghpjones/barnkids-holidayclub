import React, { Component } from 'react';
import {Row, Input} from 'react-materialize';

export class AdditionalDetails extends Component {

	render() {
		return (

			<div>
				<h5>Parent Details </h5>
				<Row>
					<Input label='First Name' onChange={(event) => {this.props.saveValues({parentFirstName: event.target.value})}} s={12} l={3}/>
					<Input label='Surname' onChange={(event) => {this.props.saveValues({parentSurname: event.target.value})}} s={12} l={3}/>
					<Input label='Contact Number' onChange={(event) => {this.props.saveValues({parentContactNo: event.target.value})}} s={12} l={3}/>
				</Row>
				<Row>
					<Input label='Email address' onChange={(event) => {this.props.saveValues({parentEmail: event.target.value})}} s={12} m={6} l={6}/>
				</Row>
				<Row>
					<Input type='textarea' label='Address' onChange={(event) => {this.props.saveValues({parentAddress: event.target.value})}} s={12} l={6}/>
				</Row>
				<h5>Emergency Contacts</h5>
				<Row>
					<Input label='First Name' onChange={(event) => {this.props.saveValues({emergency1FirstName: event.target.value})}} s={12} l={3}/>
					<Input label='Surname' onChange={(event) => {this.props.saveValues({emergency1Surname: event.target.value})}} s={12} l={3}/>
					<Input label='Contact Number' onChange={(event) => {this.props.saveValues({emergency1ContactNo: event.target.value})}} s={12} l={3}/>
				</Row>
				<Row>
					<Input label='First Name'onChange={(event) => {this.props.saveValues({emergency2FirstName: event.target.value})}} s={12} l={3}/>
					<Input label='Surname' onChange={(event) => {this.props.saveValues({emergency2Surname: event.target.value})}} s={12} l={3}/>
					<Input label='Contact Number' onChange={(event) => {this.props.saveValues({emergency2ContactNo: event.target.value})}} s={12} l={3}/>
				</Row>


				<h5>Doctor Details</h5>
				<Row>
					<Input label='Name of Doctor' onChange={(event) => {this.props.saveValues({doctorName: event.target.value})}} s={12} l={3}/>
					<Input label='Practice Name' onChange={(event) => {this.props.saveValues({doctorPractice: event.target.value})}} s={12} l={3}/>
				</Row>
				<Row>
					<Input type='textarea' label='Alergy Details' onChange={(event) => {this.props.saveValues({alergyDetails: event.target.value})}} s={12} l={3}/>
				</Row>

				<h5>Declaration and Consent</h5>
				<p>In the event of sudden illness or accident affecting my child, if recommended by a doctor, 
				I agree to emergency treatment including any operative and/or administration of a general anaesthetic 
				to my child.</p>
				<Input type='checkbox' label= 'I Agree' onClick={(event) => {this.props.saveValues({consentIllness: event.target.checked})}}/>

				<p>
				I give/do not give consent for staff to apply sunscreen / arnica cream/ Waspeze if needed.</p>
				<Input type='checkbox' label= 'I Agree' onClick={(event) => {this.props.saveValues({consentCream: event.target.checked})}}/>
				

				<p>
				I have read the <a href="http://www.barnkids.co.uk/terms-and-conditions/">Terms and Conditions</a> of Booking and agree to abide by them.</p>
				<Input type='checkbox' label= 'I Agree' onClick={(event) => {this.props.saveValues({consentTandC: event.target.checked})}}/>
				

				 

			</div>


		);

	}

};