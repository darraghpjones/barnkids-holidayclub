var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ticketSchema = new Schema ( {
	Day:String,
	Availability:Integer,
   	Waitlist:Integer
});

module.exports = mongoose.model('tickets', ticketSchema);