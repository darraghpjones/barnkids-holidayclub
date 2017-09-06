var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bookingInfoSchema = new Schema ( {
	childFirstName:String,
    childSurname:String,
    childDOB:String,
    childSex:String,
    childAttendedPreviously:String,
    childSchoolAttended:String,
    childFriends:String ,
    parentFirstName:String,
    parentSurname:String,
    parentContactNo:String,
    parentEmail:String,
    parentAddress:String,
    emergency1FirstName:String,
    emergency1Surname:String,
    emergency1ContactNo:String,
    emergency2FirstName:String,
    emergency2Surname:String,
    emergency2ContactNo:String,
    doctorName:String,
    doctorPractice:String,
    alergyDetails:String,
    consentIllness:String,
    consentCream:String,
    consentTandC:String

},{ collection : 'bookingInfo'});

module.exports = mongoose.model('booking-info', bookingInfoSchema);