const express = require("express");
const userRouter = express.Router();
const User = require("../models/user.js");
const bcrypt = require("bcrypt");

//index (timeline...everyone's posts)


//new (signup page)

//delete (delete account...settings page?)

//update (connected to edit update's user's profile info)

//create (connected to new)
userRouter.post("/", (req, res) => {
    //Check for an existing username 
    User.findOne({
        username: req.body.username
    }, (err, foundUser) => {
        //If no user is found with that username
        if (!foundUser) {
            //overwrite the user password with hashed password, then pass that in to our database
            req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
            res.json(User.create(req.body));
        } else if (foundUser.username === req.body.username) {
            res.send("That username address has already been registered.");
        };
    })
});


//edit (possibly settings page, can delete and edit account from here)

//show (each person's individual page, username pfp bio and posts)
//if user session is not equal to show page you route to, no settings route button appears)

module.exports = userRouter;