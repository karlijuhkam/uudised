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

mongoose.connect('mongodb://uudised:uudised123@ds016148.mlab.com:16148/atlas'); // connect to our database

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


router.route('/news')
    //new post
    .post(function(req, res) {
        var news = new News();

        news.title = req.body.title;
        news.date = new Date();
        news.author = req.body.author;
        news.photoUrl = req.body.photoUrl;
        news.content = req.body.content;
        news.category = req.body.category;
        news.tags = req.body.tags;

        // save the post and check for errors
        news.save(function(err) {
            if (err)
            res.send(err);

            res.json({ message: 'Uudis lisatud!' });
        })
    })
    // fetches all news
    .get(function(req, res) {
        News.find(function(err, news) {
            if (err)
            res.send(err);
    
            res.json(news);
        });
    });

router.route('/news/:news_id')

    // get post by id
    .get(function(req, res) {
        News.findById(req.params.news_id, function(err, news) {
            if (err)
                res.send(err);
            res.json(news);
        });
    })
    // deletes post by id
    .delete(function(req, res) {
        News.remove({
            _id: req.params.news_id
        }, function(err, news) {
            if (err)
                res.send(err);

            res.json({ message: 'Postitus kustutatud!' });
        });
    });
    


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server jookseb pordil: ' + port);