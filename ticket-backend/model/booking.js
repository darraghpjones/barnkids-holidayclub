var mongoose = require('mongoose');
var bookingInfo = require('./bookingInfo');

var Schema = mongoose.Schema;

var bookingSchema = new Schema ( {
	SessionID:String,
	Day:String,
	Type:String, 
	Status:String,
	bookingInfo:[{type: Schema.Types.ObjectId, ref: bookingInfo}]

});

module.exports = mongoose.model('booking', bookingSchema);