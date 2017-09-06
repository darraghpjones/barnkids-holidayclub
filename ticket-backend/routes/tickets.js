var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var session = require('../model/session');
var bookingInfo = require('../model/bookingInfo');
var booking = require('../model/booking');
var connectionstring = 'mongodb://barnkids-app:chick-lashing-speedup@ds121494.mlab.com:21494/barnkids-tickets';

mongoose.set('debug', true);


/* GET users listing. */
router.route('/ticketAvailability')
	.get(function(req, res, next) {
  
	   mongoose.connect(connectionstring, {useMongoClient: true});

    	var db = mongoose.connection; 
    	db.on('error', console.error.bind(console, 'connection error:'));
    	db.once('open', function (){ 

    	session.find({}).sort({Day:'asc'}).exec(function (err, document) { 
    		res.json(document)});
    });

	})
	.post(function(req, res) {
		data = req.body;

		res.json( );

	});

router.route('/reserveTickets')
	.post((req, res) => { 
		//console.log(req.body);
		mongoose.connect(connectionstring, {useMongoClient: true});

    	var db = mongoose.connection; 
    	db.on('error', console.error.bind(console, 'connection error:'));
    	db.once('open', function (){ 

    		bookingInfoData = new bookingInfo (req.body.fieldValues);

	    	bookingInfoData.save(function (err, savedBooking, numAffected) {
	    		//console.log(numAffected+" NumAffected");

	    		//SAVE THE BOOKING INFO? SEPERATE THE BOOKING

	    		req.body.booking.map((bookingData) => 
	    		{
    	
		    		session.findOneAndUpdate({Day:bookingData.Date}, {$inc:{Availability:-1}},function (err, doc) { 
		    		//console.log("Found Doc:::::"+doc);
		    		});	
		    		newBooking = new booking ();
		    		newBooking.Day = bookingData.Date;
		    		newBooking.Type = bookingData.Type;
		    		newBooking.Status = bookingData.Status;
		    		newBooking.bookingInfo = savedBooking._id;
		    		newBooking.save(function (err, savedBookingData, numAffected) { console.log("DJ HERE")});



				});


	    		res.send();
	    		});
	    	});

	    	

		
    });

module.exports = router;