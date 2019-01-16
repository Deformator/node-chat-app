// Jan 1st 1970 00:00:00 am

var moment = require('moment');

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var date = moment();
console.log(date.format('MMM Do, YYYY'));
console.log(date.format('lll'));