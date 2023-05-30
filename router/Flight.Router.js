// ! flight Router for air Ticket Booking

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const flightModel = require('../models/Flight.Model');

const app = express();


const flightRouter = express.Router();
flightRouter.use(express.json());


// ! GET REQUEST 

// Get the all  flights here

flightRouter.get('/flights', async (req, res) => {

    try {
        // finding the flight data
        let data = await flightModel.find()

        console.log(data);
        // if data is correct the send the correct status message
        console.log({ message: `HERE YOU GET YOUR ALL  NEW FLIGHT THANKS AND HAPPY JOURNEY ✈️` })
        res.status(200).send({ message: `:${`THANKS FOR ADDING NEW FLIGHT PLEASE VISIT AGAIN  ✈️ `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `SORRY SOMETHING ERROR IN GETTING ☹️ YOUR FLIGHT LOOK INTO IT` })

    }

})

// GET FLIGHT BY id 

flightRouter.get('/flights/:id', async (req, res) => {

    try {
        // finding the flight data by id 
        let id = req.params.id

        let data = await flightModel.findById(id)

        console.log(data);
        // if data is correct the send the correct status message
        console.log({ message: `HERE YOU GET YOUR UNIQUE  NEW FLIGHT THANKS AND HAPPY JOURNEY ✈️` })
        res.status(200).send({ message: `:${`THANKS FOR ADDING NEW FLIGHT PLEASE VISIT AGAIN  ✈️ `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `SORRY SOMETHING ERROR IN GETTING ☹️ YOUR FLIGHT LOOK INTO IT` })

    }

})




// ! PERFORMING THE CRUD OPERATIONS 

//! POST /airTicketBook

// Create or add a new  flight ticket book 
flightRouter.post('/flights', async (req, res) => {

    // taking the flight details from flight schema from posting in req.body
    let flight = req.body;
    console.log(flight);

    try {
        //  creating a new flight ticket with use of model schema
        let data = new flightModel(flight)
        // save data in mongodb instance
        await data.save();
        console.log(data);
        console.log({ message: `HERE YOU ADD YOU NEW FLIGHT ✈️` })
        // if data is correct the send the correct status message
        res.status(201).send({ message: `:${`THANKS FOR ADDING NEW FLIGHT PLEASE VISIT AGAIN  ✈️`}` })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `SORRY SOMETHING ERROR IN CREATING YOUR FLIGHT ☹️LOOK INTO IT` })

    }

})


// ! PATCH REQUEST

// allow users to update the details of a specific flight identified by its ID.

flightRouter.patch('/flights/:id', async (req, res) => {

    try {
        // taking the flight details from flight schema for updating in req.body
        let id = req.params.id;
        let flight = req.body;
        console.log(id, flight)
        //  finding by its id  and upadting the flight details
        let data = await flightModel.findByIdAndUpdate(id, flight)

        console.log(data);
        console.log({ message: `HERE YOU CAN UPDATE YOUR  FLIGHT WE YOU BOOK WRONG THANKS AND HAPPY JOURNEY ✈️`, data })
        // if data is correct the send the correct status message
        res.status(204).send({ message: `:${`THANKS FOR ADDING NEW FLIGHT PLEASE VISIT AGAIN  ✈️ `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `SORRY SOMETHING ERROR IN UDATING NOW ☹️ YOUR FLIGHT LOOK INTO IT` })

    }

})

// !DELETE METHOD

//allow users to delete a specific flight identified by its ID.

flightRouter.delete('/flights/:id', async (req, res) => {

    try {
        // taking the flight details from flight schema for updating in req.body
        let id = req.params.id;

        console.log(id)
        //  finding by its id  and deleting the flight details
        let data = await flightModel.findByIdAndDelete(id)

        console.log(data);
        console.log({ message: ` YOUR FLIGHT THAT YOU BOOKED IS DELETED  YOU BOOK AGAIN  THANKS AND HAPPY JOURNEY ✈️`, data })
        // if data is correct the send the correct status message
        res.status(204).send({ message: `:${`THANKS FOR DELETING   FLIGHT PLEASE VISIT AGAIN  ✈️ `}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `SORRY SOMETHING ERROR IN DELETING NOW ☹️ YOUR FLIGHT LOOK INTO IT` })

    }

})


// exporting router of flight of using in index file
module.exports = flightRouter