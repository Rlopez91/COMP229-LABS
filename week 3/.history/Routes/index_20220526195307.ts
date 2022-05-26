var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req: express.request, res, next) {
  res.render('index', { title: 'Express' });
});

export default router;
