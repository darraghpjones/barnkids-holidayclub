var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var sessionsSchema = new Schema ( {
	SessionID:String,
	Day:String,
	Availability:Number, 
	WaitList:String

});

module.exports = mongoose.model('sessions', sessionsSchema);