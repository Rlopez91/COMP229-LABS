import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req: express.Request, res: express, next) {
  res.render('index', { title: 'Express' });
});

export default router;
