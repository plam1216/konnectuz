const express = require('express');
const bcrypt = require('bcrypt');
const sessionsRouter = express.Router();
const User = require('../models/user')

//logout
sessionsRouter.delete('/', (req, res) => {
    req.session.destroy();
    res.send('DisKonnectUz')
})


//login
sessionsRouter.post('/', (req, res) => {
    //Check for an existing user
    User.findOne({
        username: req.body.username
    }, (err, foundUser) => {
        //send error if no user registered
        if (!foundUser) {
            res.send("No user with that username is registered")
        } else {
            //if user found, compare password
            const passwordMatches = bcrypt.compareSync(req.body.password, foundUser.password)
            if (passwordMatches) {
                //add user to session
                req.session.currentUser = foundUser;
                res.json(req.session.currentUser);
            }
            else {
                //if pw doesnt match
                res.send('Invalid credentials')
            }
        }
    }
    )
})

module.exports = sessionsRouter;