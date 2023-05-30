const express = require("express");
const { connection } = require("./config/db");
const UserRouter = require("./router/User.Router");
const flightRouter = require("./router/Flight.Router");
const bookingRouter = require("./router/Booking.Router");
const auth = require("./middleware/auth");

const app = express();
app.use("/", UserRouter);

app.get("/", async (req, res) => {
  try {
    res.send(`<h1> AIR TICKET SYSTEM HOME ROUTER</h1>`);

  } catch (error) {
    console.log(error.message);

  }

})

app.use('/', auth)
app.use("/", flightRouter);
app.use("/", bookingRouter)
app.use(express.json());





// connection to server

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log(`app listening on port ${process.env.port}`);
  } catch (error) {
    console.log({ error: `error in connections with the  port: ${error.message}` });
  }
});
