const express = require("express");
const commentRouter = express.Router();
const User = require("../models/user.js");

//delete(button can be attached to bottom of post)
commentRouter.delete("/:userid/:postid", (req, res) => {
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
commentRouter.post("/:userid", async (req, res) => {
    try {
        res.json(await User.findByIdAndUpdate(req.params.userid, { $push: { posts: req.body } }))
    } catch (error) {
        res.send("poopie")
    }
})

module.exports = commentRouter;