var express = require('express');
var moment = require('moment');
var router = express.Router();

router.get('/:query', function(req, res, next) {
  let unixTime = ''
  let formattedTime = ''

  if ( !req.params.query.match(/[a-z]/i) ) {
    unixTime = req.params.query
    formatted = moment.unix(unixTime).format("MM/DD/YYYY");

    res.send({
      unix: unixTime,
      formatted: formatted
    })

  } else {
    res.send(req.params.query)
  }

});

module.exports = router;
