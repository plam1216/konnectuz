//DEPENDENCIES
const express = require ('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const cors = require("cors");
const morgan = require("morgan");
const userController = require("./controllers/users.js");

///////////////////
//MIDDLEWARE
///////////////////
app.use(cors()); //prevent cors errors, open acces to all origins
app.use(morgan('dev')); //logging
app.use(express.json()); //parse json bodies
app.use("/user", userController); //add user controller

/////////////////////
//DATABASE CONNECTION
/////////////////////
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

/////////////////////////////////////
//DATABASE CONNECTION SUCCESS/FAILURE
/////////////////////////////////////
const db = mongoose.connection
db.on('error', (err) => console.log(err + "is mongo not running?"))
db.on('connected', () => console.log('mongo connected'))
db.on('disconnected', () => console.log('mongo disconnected'))

////////////////
//ROUTES
////////////////

//Index
app.use('/', (req, res) => {
    res.send('Hello World')
})

//User Controller

////////////////
//LISTENING
////////////////
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`I can hear you on port ${PORT}`));