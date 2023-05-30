// ! booking Router for air Ticket Booking

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const bookModel = require('../models/Booking.Model');

const app = express();


const bookingRouter = express.Router();
bookingRouter.use(express.json());


// ! GET REQUEST 

// Get the all  bookings here

bookingRouter.get('/dashboard', async (req, res) => {

    try {
        // finding the booking data
        let data = await bookModel.find()

        console.log(data);
        // if data is correct the send the correct status message
        console.log({ message: `HERE YOU GET YOUR ALL  NEW booking THANKS AND HAPPY JOURNEY ✈️` })
        res.status(200).send({ message: `:${`THANKS FOR ADDING NEW booking PLEASE VISIT AGAIN  ✈️ `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `SORRY SOMETHING ERROR IN GETTING ☹️ YOUR booking LOOK INTO IT` })

    }

})

// GET booking BY id 

bookingRouter.get('/bookings/:id', async (req, res) => {

    try {
        // finding the booking data by id 
        let id = req.params.id

        let data = await bookModel.findById(id)

        console.log(data);
        // if data is correct the send the correct status message
        console.log({ message: `HERE YOU GET YOUR UNIQUE  NEW booking THANKS AND HAPPY JOURNEY ✈️` })
        res.status(200).send({ message: `:${`THANKS FOR ADDING NEW booking PLEASE VISIT AGAIN  ✈️ `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `SORRY SOMETHING ERROR IN GETTING ☹️ YOUR booking LOOK INTO IT` })

    }

})




// ! PERFORMING THE CRUD OPERATIONS 

//! POST /airTicketBook

// Create or add a new  booking ticket book 
bookingRouter.post('/booking', async (req, res) => {

    // taking the booking details from booking schema from posting in req.body
    let booking = {
        user: req.body.user_Id,
        flight: req.body.flight
    }


    console.log(booking);

    try {
        //  creating a new booking ticket with use of model schema
        let data = new bookModel(booking)
        // save data in mongodb instance
        await data.save();
        console.log(data);
        console.log({ message: `HERE YOU ADD YOU NEW booking ✈️` })
        // if data is correct the send the correct status message
        res.status(201).send({ message: `:${`THANKS FOR ADDING NEW booking PLEASE VISIT AGAIN  ✈️`}` })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `SORRY SOMETHING ERROR IN CREATING YOUR booking ☹️LOOK INTO IT` })

    }

})


// ! PATCH REQUEST

// allow users to update the details of a specific booking identified by its ID.

bookingRouter.patch('/bookings/:id', async (req, res) => {

    try {
        // taking the booking details from booking schema for updating in req.body
        let id = req.params.id;
        let booking = req.body;
        console.log(id, booking)
        //  finding by its id  and upadting the booking details
        let data = await bookModel.findByIdAndUpdate(id, booking)

        console.log(data);
        console.log({ message: `HERE YOU CAN UPDATE YOUR  booking WE YOU BOOK WRONG THANKS AND HAPPY JOURNEY ✈️`, data })
        // if data is correct the send the correct status message
        res.status(204).send({ message: `:${`THANKS FOR ADDING NEW booking PLEASE VISIT AGAIN  ✈️ `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `SORRY SOMETHING ERROR IN UDATING NOW ☹️ YOUR booking LOOK INTO IT` })

    }

})


//allow users to delete a specific booking identified by its ID.




// exporting router of booking of using in index file
module.exports = bookingRouter