import React, { Component  } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import {TicketRegistration} from './pages/TicketRegistration';
import {ConfirmBooking} from './pages/ConfirmBooking';

//var connectionstring = 'mongodb://barnkids-app:chick-lashing-speedup@ds121494.mlab.com:21494/barnkids-tickets';


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
          <h4>Barnkids Ticketing System - October Holiday Club</h4>
        </div>
          <Main/>
      </div>
    );
  }
}

export default App;
