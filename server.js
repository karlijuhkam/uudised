// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'API töötab!' });   
});


//fetches all the news
router.get('/news', function(req, res) {
    res.json({ message: '/news töötab!' });   
});

//new post
router.post('/news', function(req, res) {
    
});

//gets a post (by id)
router.get('/news/:news_ID', function(req, res) {
    
});

//updates post (by id)
router.put('/news/:news_ID', function(req, res) {
    
});

//deletes a post (by id)
router.delete('/news/:news_ID', function(req, res) {
    
});



// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server jookseb pordil: ' + port);