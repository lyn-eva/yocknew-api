import { Router } from 'express';
import { updateUser } from '../controller/user.controller';
const router: Router = require('express').Router();

router.get('/', (req, res) => {
  // send public/private user detai
  res.send('user').end();
});

router.put('/:userId', updateUser);

module.exports = router;
