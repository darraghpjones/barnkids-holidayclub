import React from 'react';
import {Row, Input } from 'react-materialize';
import {TextInput} from './formComponents/textInput';
import {DateInput} from './formComponents/dateInput';

export class ChildDetails extends React.Component {


saveAndContinue(e) { 

    this.props.saveValues(this.state);
	this.props.nextStep();
}

handleSexChoice(e) { 
  this.props.saveValues({childSex: e.target.value});    
}

handleDOBValidation(event){
    if (event.target.value)
    this.props.saveValues({childDOB: event.target.value});
}

handleTextRequired(event){

}
//31 /8/2013

render() {
	return (<div>
	 <h5> Child Details </h5>
     <Row>
     	<TextInput required='true' label='Child First Name *' onChange={(event) => {this.props.saveValues({childFirstName: event.target.value})}} s={12} l={3}/>
        <TextInput label='Child Surname *' onChange={(event) => {this.props.saveValues({childSurname: event.target.value})}} s={12} l={3}/>
        <DateInput type='date' error='Date of Birth Must be on or before 31/8/2013' label='Date of Birth (Must be before 01/09/2013)'  onChange={(event) => {this.handleDOBValidation(event)}} s={12} l={3}/>
     </Row>  
     <Row>
        <Input name='sex' type='radio' value='Male' label='Male' onClick={(e) => this.handleSexChoice(e)} s={6} l={3}/>
        <Input name='sex' type='radio' value='Female' label='Female'  onClick={(e) => this.handleSexChoice(e)} s={6} l={3}/>
        <Input type='checkbox' value='Yes' label='Attended the Barn Before?' onClick={(event) => {this.props.saveValues({childAttendedPreviously: event.target.checked})}} s={12} l={3}/>
     </Row>
     <Row>  
     <Input type='select' label='School Attended' onChange={(event) => {this.props.saveValues({childSchoolAttended: event.target.value})}}s={12} l={3}>
            <option value='None'>Please Select..</option>
            <option value='St Marys'>St Mary's</option>
            <option value='Witley'>Witley</option>
            <option value='Other'>Other</option>
        </Input>
      
         <Input label='Any special friends at the barn?' onChange={(event) => {this.props.saveValues({childFriends: event.target.value})}}s={12} l={6}/>
     </Row>
     <Row>

     </Row>

     <br/><br/>
     
    </div>
    );
 }


};