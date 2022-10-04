const express = require("express");
const postRouter = express.Router();
const User = require("../models/user.js");

//delete(button can be attached to bottom of post)
//if user session id is equal to post user id
postRouter.delete("/:userid/:postid", (req, res) => {
    //Finds user by id from route
    try {
        User.findById(req.params.userid, (err, foundUser) => {
            res.json(foundUser.posts.id(req.params.postid).remove())
            foundUser.save()
        })
    } catch (error) {
        res.send("oopsie poopsie");
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

//show (click comment button and reveals comments pertaining to particular post)
postRouter.get('/:userid/:postid', (req, res) => {
    try {
         User.findById(req.params.userid, (err, foundUser) => {
            res.json(foundUser.posts.id(req.params.postid))
        })
    } catch (error) {
        throw(error)
    }
})

module.exports = postRouter;