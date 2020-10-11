import express from 'express';
var router = express.Router();

/* GET posts listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

export default router;