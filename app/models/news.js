// app/models/news.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var NewsSchema   = new Schema({
    title: String,
    date: Date,
    author: String,
    photoUrl: String,
    content: String,
    category: String,
    tags: String
});

module.exports = mongoose.model('News', NewsSchema);