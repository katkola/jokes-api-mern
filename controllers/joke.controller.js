const Joke = require('../models/joke.model');

//return all
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes)=> {
            res.json({jokes: allJokes})
        })
        .catch((err)=> {
            res.json({message: 'something went oopsie', error: err})
        });
}

//make one
module.exports.create = (req, res) => {
    Joke.create(req.body)
        .then( newJoke => res.json({joke: newJoke}))
        .catch((err)=> {
            res.json({message: 'something went oopsie', error: err})
        })
}

//find one
module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then((oneJoke)=> {
            res.json({joke: oneJoke})
        })
        .catch((err)=> {
            res.json({message: 'something went oopsie', error: err})
        });
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true, runValidators: true})
        .then(updatedJoke => {
            res.json({ user: updatedJoke })
        })
        .catch((err)=> {
            res.json({message: 'something went oopsie', error: err})
        });
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}