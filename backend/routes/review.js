const express = require('express');
const router = express.Router();
const Movies = require('../model/movies');
const Reviews = require('../model/review');
const mongoose = require('mongoose');

//Create
router.post('/', async (req, res) => {

    console.log(req.body);
    console.log("Movie id ",req.body.movie);
    const newReview = new Reviews({
        movie: mongoose.Types.ObjectId(req.body.movie),
        rating: req.body.rating,
        review:req.body.review,

    });

    try {

        let review = await newReview.save();
        if(!review) throw Error('Something went wrong with the review')
        await res.status(200).json(review);
    } catch(error) {
        console.log(error)
        await res.status(400).json({msg: error})
    }
});


//Fetch all
router.get('/', async (req, res) => {
    try {
        const reviews = await Reviews.find();
        if(!reviews) throw Error('No Items');
        await res.status(200).json(reviews);
    }catch(err) {
        await res.status(400).json({message: err})
    }
});

router.get('/:id', async (req, res) => {
    try {
        const review = await Reviews.findById(req.params.id);
        if(!review) throw Error('No Items');
        await res.status(200).json(review);
    }catch(err) {
        await res.status(400).json({message: err})
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const review = await Reviews.findByIdAndUpdate(req.params.id, req.body);
        if(!review) throw Error('Something went wrong while updating the review');
        await res.status(200).json({success: true,comment:review});
    }catch(err) {
        await res.status(400).json({msg:err});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const review = await Reviews.findByIdAndDelete(req.params.id);
        if(!review) throw Error('No Review found!');
        await res.status(200).json({success: true})
    }catch(err) {
        await res.status(400).json({msg: error})
    }
});

router.get('/movie/:id', async (req, res, next)=> {
    console.log("Movies review "+req.params.id);
    try {
        const review = await Reviews.find({
            movie:mongoose.Types.ObjectId(req.params.id)
        })
        if(!review) throw Error('No Items');
        await res.status(200).json(review);
    }catch(err) {
        await res.status(400).json({message: err})
    }
});
module.exports = router;