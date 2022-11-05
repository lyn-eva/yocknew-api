import { Router } from 'express';
const router: Router = require('express').Router();

router.get('/', (req, res) => {
  // send public transactions
  // send private transations for premium users
  res.send('user').end();
});
router.post('/', (req, res) => {
  // create a deal
  res.send('user').end();
});
module.exports = router;
