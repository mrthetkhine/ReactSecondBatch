var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log("Movies / Controller");
    res.send('Movie list');
});
/*
router.get(/matrix.*$/, function(req, res, next) {
    console.log("Matrix / Controller");
    res.send('Movie list');
});

 */
router.get('/:movieId', function(req, res, next) {
    console.log("Get movie with ID / Controller");
    res.send('Get movie with ID '+ req.params.movieId);
});

router.post('/',function(req, res, next) {
    console.log("Movies / Controller");
    res.send('Movie Created');
});
router.get('/details', function(req, res, next) {
    console.log("Movies Details / Controller");
    res.send('Movie Details list');
});
module.exports = router;
