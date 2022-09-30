const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    posts: [postSchema],
    //Image string needs to be a URL to show
    image: String, 
})

const User = mongoose.model("User", userSchema);

module.exports = User;