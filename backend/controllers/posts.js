const express = require("express");
const postRouter = express.Router();
const User = require("../models/user.js");

//no index

//new(probably dont need, could link to user show page or timeline)

//delete(button can be attached to bottom of post)
//if user session id is equal to post user id

//update(attached to edit route)
postRouter.put("/:id", async (req, res) => {
    try {
        //works so far but doesnt target the post itself
        res.json(await User.findByIdAndUpdate(req.params.id, 
            {
                //sets user.posts value to an object containing all of the keys and values in req.body
                $set: 
                {posts: {...req.body}}
            }, {new: true} 
        ))
    } catch (error) {
        res.send("poopie")
    }
})

//create
postRouter.post("/:id", async (req, res) => {
    try {
        res.json(await User.findByIdAndUpdate(req.params.id, {$push: {posts: req.body}} ))
    } catch (error) {
        res.send("poopie")
    }
})

//edit (can edit post, button on post)

//show (click comment button and reveals comments pertaining to particular post)

module.exports = postRouter;