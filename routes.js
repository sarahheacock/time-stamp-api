'use strict';

var express = require("express");
var router = express.Router();

router.get("/", function(req,res){
  res.send('<h1>whoot</h1>');
});

router.get("/:date", function(req,res,next){
  var unix = req.params.date.split('').reduce(function(a, b){
    if(a === false || b < '0' || b > '9') return false;
    return (a * 10 + (b - '0'));
  }, 0);

  var date = /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{2},\s\d{4}$/.test(req.params.date);

  if(unix){
    res.json({"unix": unix, "date": unixToDate(unix)});
    next();
  }
  else if(date){
    res.json({"unix": dateToUnix(req.params.date), "date":req.params.date});
    next();
  }
  else {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
  }
});

function unixToDate(unix){
  var dateArr = new Date(unix).toString().split(' ');
  return dateArr[1] + " " + dateArr[2] + ", " + dateArr[3];
}

function dateToUnix(date){
  return new Date(date).getTime();
}

module.exports = router;
