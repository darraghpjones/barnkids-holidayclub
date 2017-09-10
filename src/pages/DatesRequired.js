import React, { Component } from 'react';
import {Row, Input, Card, Col, Badge} from 'react-materialize';

export class DatesRequired extends Component {

    onDayChange(event) { 

        var newTicket = null;
        if (event.target.value === 'CORE'){
            newTicket = {
                Date:event.target.name,
                Type:'Core',
                Status:"Pending"
            };
        }
        if (event.target.value ==='FULL'){
            newTicket = {
                Date:event.target.name,
                Type:'Full',
                Status:"Pending"
            };
        }
        var fullDayCount = 0;
        var coreDayCount = 0;
        //find existing ticket and update it - or return existing array
        var updatedTicketSelection = this.props.ticketSelection.filter((item) => {
            
            if (item.Date === event.target.name) { 
                return false;
            } else{ 
                if( item.Type === 'Full') fullDayCount++;
                if ( item.Type ==='Core') coreDayCount++;
                return true;
            }
        });

        if (newTicket!=null) { 
            updatedTicketSelection.push(newTicket);
            if( newTicket.Type === 'Full') fullDayCount++;
                if ( newTicket.Type ==='Core') coreDayCount++;

        }

        //this.props.saveBooking({ticketSelection:ticketAvailCopy});
        this.props.saveBooking({ticketSelection:updatedTicketSelection, coreDayCount:coreDayCount, fullDayCount:fullDayCount});

    }

	render() { 

    if (this.props.ticketInfo) { 

	return (
        <div>
        <h5>Holiday Sessions Required</h5>
                   <Row>
                  {this.props.ticketInfo.map((item) => 
                    

                   <Col l={4} s={12} key={item.Day}>
                       <Card textClassName='ticket-card' title={item.Day}>
                        <p>Number of places remaining: {item.Availability}</p>
                        <Row>
                            <Col s={12}>
                                <Input name={item.Day} disabled={item.Availability===0?true:false} value='NONE' defaultChecked='checked' onClick={(event) => {this.onDayChange(event)}} s={12} l={12} type='radio' label='None'/>
                                <Input name={item.Day} disabled={item.Availability===0?true:false} value='FULL' onClick={(event) => {this.onDayChange(event)}} s={12} l={12}  type='radio' label='Full Day 8am-6pm'/>
                                <Input name={item.Day} disabled={item.Availability===0?true:false} value='CORE' onClick={(event) => {this.onDayChange(event)}} s={12} l={12}  type='radio' label='Core Day 8:30am - 3:30pm'/> 
                            </Col>
                        </Row>
                       </Card>
                    </Col>
                  
                  )}
                  <Col s={12} l={4}>
                        <Card className='ticket-card' title='Summary'>
                            <div>Total Core Days: {this.props.coreDayCount}</div>
                            <div>Total Full Days: {this.props.fullDayCount}</div>
                            <div>Total Cost: £{ this.props.totalAmount }.00</div>                         
                        </Card>
                  </Col>
                  </Row>
        </div>
            );
        }
    else return null;
    }
};