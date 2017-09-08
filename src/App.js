import React, { Component  } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import logo from './assets/logo.png';
import './App.css';
import {TicketRegistration} from './pages/TicketRegistration';
import {ConfirmBooking} from './pages/ConfirmBooking';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={TicketRegistration}/>
      <Route exact path='/confirm' component= {ConfirmBooking}/>
    
    </Switch>
  </main>
)


class App extends Component {

  constructor (props) { 
    super(props);

    this.state = {ticketList:[]};
  }

  updateTicketData(updatedData) { 
  axios.post('/tickets/ticketAvailability', updatedData)
    .then(res => {
      
    })
    .catch(err => {
      console.error(err);
    });
  };

  render() {

    return (
      <div className="App container">
        <div >
          <img src={logo} className="App-logo" alt="logo" />
          <h4>October Holiday Club</h4>
        </div>
          <Main/>
      </div>
    );
  }
}

export default App;
