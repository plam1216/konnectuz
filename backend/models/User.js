const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    content: String,
}, { 
    timestamp: true
});

const postSchema = mongoose.Schema({
    content: String,
    image: String,
    comments: [commentSchema],
    likes: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
}, { 
    timestamp: true
});

const userSchema = mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    posts: [postSchema],
    //Image string needs to be a URL to show
    image: String, 
}, {
    timestamp: true
})

const User = mongoose.model("User", userSchema);

module.exports = User;