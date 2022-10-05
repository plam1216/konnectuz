const express = require("express");
const bcrypt = require("bcrypt");
const sessionsRouter = express.Router();
const User = require("../models/user.js");

//ROUTES

//D
//logout
sessionsRouter.delete('/', (req, res) => {
    req.session.destroy((err) => {
        res.send("DisKonnectUz")
    });
});

//U
//login 
sessionsRouter.post("/", (req, res) => {
    //Check for an existing user 
    User.findOne({
        username: req.body.username
    }, (err, foundUser) => {
        //send error if no user registered
        if (!foundUser) {
            res.send("No user with that username is registered.");
        } else {
            //if the user is found, compare the given password with the hashed password
            const passwordMatches = bcrypt.compareSync(req.body.password, foundUser.password);
            if (passwordMatches) {
                //add the user to the session
                req.session.currentUser = foundUser;
                res.json(req.session.currentUser)
            } else {
                //if the passwords don't match
                res.send("Invalid credentials.")
            };
        };
    });
});

module.exports = sessionsRouter;