var express = require('express');
var router = express.Router();
let Movies = require("../model/movies");

/* GET movie listing. */
router.get('/', async (req, res)=> {
    try {
        const movies = await Movies.find();
        if(!movies) throw Error('No Items');
        await res.status(200).json(movies);

    }catch(err)
    {
        await res.status(400).json({message: err})
    }
});
router.get('/:id', async (req, res)=> {
    try {
        const movie = await Movies.findById(req.params.id);
        if(!movie) throw Error('No Items');
        await res.status(200).json(movie);
    }catch(err) {
        await res.status(400).json({mesg: err})
    }
});
router.post('/', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const newMovie = new Movies(req.body);
    try {
        const saveMovie = await newMovie.save();
        if(!saveMovie) throw Error('Something went wrong with the movie')
        await res.status(201).json(saveMovie);
    } catch(error) {
        await res.status(400).json({msg: error})
    }
});
router.patch('/:id', async (req, res) => {
    try {
        const movie = await Movies.findByIdAndUpdate(req.params.id, req.body,{new: true});
        if(!movie) throw Error('Something went wrong while updating the post');
        await res.status(200).json({success: true,movie:movie});
    }catch(err) {
        await res.status(400).json({msg:err});
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const movie = await Movies.findByIdAndDelete(req.params.id);
        if(!movie) throw Error('No Movie found!');
        await res.status(200).json({success: true})
    }catch(err) {
        await res.status(400).json({msg: "Movie not found"})
    }
});

module.exports = router;
