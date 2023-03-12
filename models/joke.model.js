const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    //setup, punchline,
    setup: {
        type: String,
        required: [true, "setup is required, no one liners!"],
        minlength: [3, "brevity is the something of wit but...yknow"]
    },
    punchline: {
        type: String,
        required: [true, "...whats the punchlines, buddy?!"],
        minlength: [3, "brevity is the something of wit but...yknow"]}
}, {timestamps: true});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;