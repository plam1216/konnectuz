const express = require("express");
const userRouter = express.Router();
const User = require("../models/user.js");
const bcrypt = require("bcrypt");

//index (timeline...everyone's posts)
userRouter.get('/', async (req, res) => {
    try {
        //sets all people objects to a single object
        const usersObject = await User.find({})
        //maps through each object and targets posts
        res.json(usersObject.map(user => user.posts))
    }
    catch (error) {
        //send error
        res.status(400).json(error)
    }
});


//delete (delete account...settings page?)
userRouter.delete("/:id", async (req, res) => {
    try {
        res.json(await User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
            res.json(deletedUser)
        }))
    } catch (error) {
        res.status(400).json(error)
    }
})

//update (connected to edit update's user's profile info)
userRouter.put("/:id", async (req, res) => {
    try {
        res.json( await User.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch (error) {
        res.status(400).json(error)
    }
})

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
            res.json(User.create(req.body, (err, createdUser) => {
                res.json(createdUser)
            }));
        } else if (foundUser.username === req.body.username) {
            res.send("That username has already been registered.");
        };
    })
});


//edit (possibly settings page, can delete and edit account from here)

//show (each person's individual page, username pfp bio and posts)
userRouter.get('/:id', async (req, res) => {
    try {
        //send all people
        res.json(await User.findById(req.params.id));
    }
    catch (error) {
        //send error
        res.status(400).json(error)
    }
})
//if user session is not equal to show page you route to, no settings route button appears)

module.exports = userRouter;