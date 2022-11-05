import { Router } from 'express';
const router: Router = require('express').Router();

router.get('/', (req, res) => {
  // send public/private user detai
  res.send('user').end();
});

router.put('/:id', (req, res) => {
  //  user detai
  res.send('user').end();
});

module.exports = router;
