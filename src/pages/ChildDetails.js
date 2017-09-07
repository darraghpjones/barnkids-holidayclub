import React from 'react';
import {Row, Input } from 'react-materialize';

export class ChildDetails extends React.Component {


saveAndContinue(e) { 

    this.props.saveValues(this.state);
	this.props.nextStep();
}

handleSexChoice(e) { 
  this.props.saveValues({childSex: e.target.value});
}

handleDOBValidation(event){
    this.props.saveValues({childDOB: event.target.value});
}


render() {
	return (<div>
	 <h5> Child Details </h5>
     <Row>
     	<Input label='Child First Name' onChange={(event) => {this.props.saveValues({childFirstName: event.target.value})}} s={12} l={3}/>
        	<Input label='Child Surname' onChange={(event) => {this.props.saveValues({childSurname: event.target.value})}} s={12} l={3}/>
            <Input type='date' label='Date of Birth'  onChange={(event) => {this.handleDOBValidation(event)}} s={12} l={3}/>
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