import React from 'react';
import { Input } from 'react-materialize';

export class TextInput extends React.Component {

validate(event) { 
if (event.target.value.length === 0) {
		event.target.classList.remove('valid');
        event.target.classList.add('invalid');

    }
    else { 
        event.target.classList.remove('invalid');
        event.target.classList.add('valid');
    }

}

reset(event){
	//event.target.classList.remove('invalid');
}

render() {
	return (
		<Input required className='validate invalid' onFocus={(e) => this.reset(e)} onBlur={(event) => this.validate(event) } onChange={(e) => this.props.onChange(e)} s={this.props.s} l={this.props.l} m={this.props.m} label={this.props.label}/>
		);
}

}