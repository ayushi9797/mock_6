# mock_6
Air Ticket Booking



# Air Ticket Booking

✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️


# TECH_STACKS

- Nodejs

# Modules

- Nodemon
- express
- bcrypt


# REQUIREMENTS 
- USER ABLE TO REGISTER
-  USER ABLE TO LOGIN
-  AUTHENTICATION PROVIDED FOR VISTING DIFFERENT ROUTES 
-  USER BOOK THE FLIGHT 
- USER GET THE FLIGHT 
-  USER UPDATE THE FLIGHT 
-  USER DELETE THE FLIGHT 


# Database

- Mongodb

| METHOD | ENDPOINT | DESCRIPTION | STATUS CODE |
| --- | --- | --- | --- |
| POST | /api/register | This endpoint should allow users to register. | 201 |
| POST | /api/login | This endpoint should allow users to login. | 201 |
| GET | /api/flights | This endpoint should return a list of all available flights. | 200 |
| GET | /api/flights/:id | This endpoint should return the details of a specific flight identified by its ID. | 200 |
| POST | /api/flights | This endpoint should allow users to add new flights to the system. | 201 |
| PUT / PATCH | /api/flights/:id | This endpoint should allow users to update the details of a specific flight identified by its ID. | 204 |
| DELETE | /api/flights/:id | This endpoint should allow users to delete a specific flight identified by its ID. | 202 |
| POST | /api/booking | This endpoint should allow the user to book flights. | 201 |
| GET | /api/dashboard | This point should list all the bookings so far with the user and flight details. | 200 |




# The backend should have the following models

# User Model

👥👤

```
{

  "name": "String",
  "email": "String",
  "password": "String"
}

```

<!-- REGISTER MODEL --> 🔏

```
{
"name": "ayushi",
"email": "ayushi12@gmail.com",
"password": "1234"
}

```

<!-- LOGIN MODEL -->  🔓

```
{
"name": "ayushi",
"email": "ayushi12@gmail.com",

}

```

<!-- REGISTER API -->

http://localhost:8080/register

<!--  LOGIN API -->

http://localhost:8080/login

# FLIGHT MODEL ✈️

```
{

"'airline'": "String",
"flightNo": "String",
"departure": "String",
"arrival": "String",
"departureTime": "Date",
"arrivalTime": "Date",
"seats": Number,
price: Number

}

```

```
{

"'airline'": "ayushi lines",
"flightNo": "78",
"departure": "shimla",
"arrival": "goa",
"departureTime": "05-16-2004",
"arrivalTime": "03-12-2000",
"seats": 9,
"price": 9000

}

```

# CRUD OPERATION 📕📗📘📚


# API for CRUD operations

# POST REQUEST

-http://localhost:8080/flights

# GET REQUEST

-http://localhost:8080/flights

# GET BY ID

- http://localhost:8080/flights/6475ad0d412518a0f60a6756

# PATCH REQUEST

- http://localhost:8080/flights/6475ad0d412518a0f60a6756

# DELETE REQUEST

- http://localhost:8080/flights/6475ad0d412518a0f60a6756

# BOOKIngg routes

http://localhost:8080/dashboard

http://localhost:8080/booking
