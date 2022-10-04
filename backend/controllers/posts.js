const express = require("express");
const postRouter = express.Router();
const User = require("../models/user.js");

//no index

//new(probably dont need, could link to user show page or timeline)

//delete(button can be attached to bottom of post)
//if user session id is equal to post user id
postRouter.delete("/:userid/:postid", async (req, res) => {
    try {
        //Finds user by id from route
        await User.findById(req.params.userid, (err, foundUser) => {
            res.json(foundUser.posts.pull(req.params.postid))
            //Saves the changes we made after pulling the post from the user
            foundUser.save();
        })
    } catch (error) {
    }
})

//update(attached to edit route)
//works so far but doesnt target the post itself
postRouter.put("/:userid", async (req, res) => {
    try {
        //Finds user by id from route
        res.json(await User.findByIdAndUpdate(req.params.userid,
            {
                //sets user.posts value to an object containing all of the keys and values in req.body
                $set:
                    { posts: { ...req.body } }
            }
            , { new: true }
        ))
    } catch (error) {
        res.send("poopie")
    }
})

//create
postRouter.post("/:userid", async (req, res) => {
    try {
        res.json(await User.findByIdAndUpdate(req.params.userid, { $push: { posts: req.body } }))
    } catch (error) {
        res.send("poopie")
    }
})

//edit (can edit post, button on post)

//show (click comment button and reveals comments pertaining to particular post)
postRouter.get('/:userid/:postid', async (req, res) => {
    try {
        await User.findById(req.params.userid, (err, foundUser) => {
            res.json(foundUser.posts.id(req.params.postid))
        })
    } catch (error) {

    }
})

module.exports = postRouter;