var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ping Pong' });
});

/* GET home page. */
router.get('/leaderboard', function(req, res, next) {
  res.render('leaderboard', { title: 'Leaderboard' });
});

module.exports = router;
