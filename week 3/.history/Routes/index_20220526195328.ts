import express from 'express';
import router = express.Router();

/* GET home page. */
router.get('/', function(req: express.Request, res, next) {
  res.render('index', { title: 'Express' });
});

export default router;
