var redux = require("redux");
var course = require('course');
var isAdding = require('IsAdding');

var reducer = redux.combineReducers({course,isAdding});

module.exports = reducer;