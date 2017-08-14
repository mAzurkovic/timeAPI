var express = require('express');
var router = express.Router();

router.get('/:query', function(req, res, next) {
  let unixTime = ''
  let formattedTime = ''

  if ( !req.params.query.match(/[a-z]/i) ) {
    unixTime = req.params.query
    let time = new Date(req.params.query * 1000)
    formatted = time.toISOString()
  }

  res.send(JSON.stringify( {
    'unix': unixTime,
    'formatted': formatted
  } ))
});

module.exports = router;
