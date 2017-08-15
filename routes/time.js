var express = require('express');
var moment = require('moment');
var router = express.Router();

router.get('/:query', function(req, res, next) {
  let unixTime = ''
  let formatted = ''
  let natural = ''

  if ( !req.params.query.match(/[a-z]/i) ) {
    unixTime = Number(req.params.query)
    formatted = moment.unix(unixTime).format("MM/DD/YYYY");
    natural = moment.unix(unixTime).format("MMMM Do YYYY");
  } else { // has letters, ie natural language date
    unixTime = Date.parse(req.params.query)/1000
    formatted = moment.unix(unixTime).format("MM/DD/YYYY");
    natural = moment.unix(unixTime).format("MMMM Do YYYY");
  }

  res.send({
    unix: unixTime,
    natural: natural,
    formatted: formatted
  })

});

module.exports = router;
