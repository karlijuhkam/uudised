// server.js

// BASE SETUP
// =============================================================================

//posts database schema
var News = require('./app/models/news');

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017'); // connect to our database

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Midagi toimub :O');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'API töötab!' });   
});



//new post
router.route('/news')
    .post(function(req, res) {
        var news = new News();
        news.title = req.body.title;
        // save the post and check for errors
        news.save(function(err) {
            if (err)
            res.send(err);

            res.json({ message: 'Post created!' });
        })

    .get(function(req, res) {
        News.find(function(err, news) {
            if (err)
            res.send(err);

            res.json(news);
        });
    });
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server jookseb pordil: ' + port);