var moment = require('moment');

module.exports = {
  toDate: function(x){
    return (isNaN(parseInt(x))) ?
      moment(x).format('ll'):
      moment(parseInt(x)).format('ll');
  },

  toNumber: function(y){
    //console.log(isNaN(y));
    return (isNaN(parseInt(y))) ?
      new Date(y).getTime():
      parseInt(y);
    // var ifNum = new Date(parseInt(y)).getTime();
    // var ifString = new Date(y)
  }
}
