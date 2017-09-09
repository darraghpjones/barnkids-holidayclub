
import React, { Component } from 'react';
import axios from 'axios';
import {ChildDetails} from './ChildDetails';
import {DatesRequired} from './DatesRequired';
import {AdditionalDetails} from './AdditionalDetails';
import {Checkout} from './Checkout';



export class TicketRegistration extends Component {

constructor (props) { 
    super(props);
    

    var fieldValues = {
            childFirstName:'',
            childSurname:null,
            childDOB:null,
            childSex:null,
            childAttendedPreviously:null,
            childSchoolAttended:null,
            childFriends:null ,
            parentFirstName:null,
            parentSurname:null,
            parentContactNo:null,
            parentEmail:null,
            parentAddress:'',
            emergency1FirstName:'',
            emergency1Surname:'',
            emergency1ContactNo:'',
            emergency2FirstName:'',
            emergency2Surname:'',
            emergency2ContactNo:'',
            doctorName:'',
            doctorPractice:'',
            alergyDetails:'',
            consentIllness:'',
            consentCream:'',
            consentTandC:''
    }

    this.state = {ticketInfo:[], formFields:fieldValues, ticketBooking:[], coreDayCount:0, fullDayCount:0, totalAmount:0, valid:false};
    

}

componentDidMount() {
    axios.get('/tickets/ticketAvailability')
    .then(res => { 
      this.setState({ticketInfo:res.data});
      if (this.state.ticketInfo.TicketAvailability){
          this.state.ticketInfo.TicketAvailability.map((item) => 
            {
                return this.state.ticketBooking.push({NumberLeft:item.Availability, Date:item.Day, CoreDay:'No', FullDay:'No'});
            }) 
        }

    })
  }

nextStep() {
  this.setState({
    step : this.state.step + 1
  })
};

saveValues(fields) { 
            var slicedFieldValues = Object.assign({}, this.state.formFields, fields);
            this.setState({formFields:slicedFieldValues});
            this.checkValid(slicedFieldValues, this.state.totalAmount);
}

saveBooking(booking) { 
    this.setState({ticketBooking:booking.ticketSelection});
    this.setState({coreDayCount: booking.coreDayCount});
    this.setState({fullDayCount:booking.fullDayCount});
    this.setState({totalAmount: booking.coreDayCount * 36 + booking.fullDayCount * 44})
    this.checkValid(this.state.formFields,booking.coreDayCount+booking.fullDayCount);

}

checkValid (fieldValues, totalAmount) {

if (
                fieldValues.childFirstName && fieldValues.childFirstName.length>0 &&
                fieldValues.childSurname && fieldValues.childSurname.length >0 &&
                fieldValues.parentFirstName && fieldValues.parentFirstName.length >0 &&
                fieldValues.parentSurname && fieldValues.parentSurname.length > 0 &&
                fieldValues.parentEmail && fieldValues.parentEmail.length >0 && 
                fieldValues.consentIllness && fieldValues.consentTandC &&
                totalAmount>0){ 
                this.setState({valid:true});
            }
            else {

                 this.setState({valid:false})
            } 

}

submitBooking() { 

    var bookingInfo = {fieldValues:this.state.formFields,booking:this.state.ticketBooking};
    axios.post('/tickets/reserveTickets', bookingInfo)
    .then(res => {
     
      //this.getTicketData(null);
      //this.setState({ticketList.TicketAvailability:res.data});
    })
    .catch(err => {
      console.error(err);
    });
    //DO some feedback>?>....and error handling 
}

render() {
	
    
    return (
	<div>

        	<ChildDetails fields={this.state.formFields} saveValues={(f) => this.saveValues(f)}/>
            <DatesRequired ticketInfo={this.state.ticketInfo} totalAmount={this.state.totalAmount} coreDayCount={this.state.coreDayCount} fullDayCount={this.state.fullDayCount} ticketSelection={this.state.ticketBooking} saveBooking={(booking) => this.saveBooking(booking)}/>
            <AdditionalDetails fields={this.state.formFields} saveValues={(f) => this.saveValues(f)} />
            <Checkout valid={this.state.valid} name="Holiday Club Payment" history={this.props.history} submitBooking={() => this.submitBooking()} amount={this.state.totalAmount} description="Barnkids" email={this.state.formFields?this.state.formFields.parentEmail:''}/>

    </div>
	);
};

};