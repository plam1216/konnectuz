const express = require("express");
const commentRouter = express.Router();
const User = require("../models/user.js");

//delete(button can be attached to bottom of post)
commentRouter.delete("/:userid/:postid/:commentid", (req, res) => {
    //Finds user by id from route
    try {
        User.findById(req.params.userid, (err, foundUser) => {
            res.json(foundUser.posts.id(req.params.postid).comments.id(req.params.commentid).remove())
            foundUser.save()
        })
    } catch (error) {
        res.send("oopsie poopsie");
    }
})

//create
commentRouter.post("/:userid/:postid", (req, res) => {
    try {
        User.findById(req.params.userid, (err, foundUser) => {
            foundUser.posts.id(req.params.postid).comments.push(req.body);
            res.json(foundUser.posts.id(req.params.postid).comments);
            foundUser.save();
        })
    } catch (error) {
        res.send("poopie")
    }
})

module.exports = commentRouter;