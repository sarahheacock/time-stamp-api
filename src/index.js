var express = require('express');
var dateConversion = require('./dateConversion');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/:date', function(req, res){
  //if natural date
  if(isNaN(Date.parse(req.params.date))===false){
    res.jsonp({"unix": dateConversion.toNumber(req.params.date),
      "natural": dateConversion.toDate(req.params.date)});
  }
  else {
    res.send("not available");
  }

});

app.listen(3000);
