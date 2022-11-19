import { Router } from 'express';
import {
  confirmAccRegiseration,
  deleteAcc,
  loginAcc,
  logoutAcc,
  registerAcc,
} from '../controller/auth.controller';

const router: Router = require('express').Router();

router.post('/register', registerAcc);

router.put('/login', loginAcc);

router.delete('/logout', logoutAcc);

router.delete('/resign', deleteAcc);

router.get('/confirm', confirmAccRegiseration);

router.put('/forgot-pwd', (req, res) => {
  // reset password
});

module.exports = router;
// {"username": "Owari", "email": "owari@sekai.no", "sekainoowari"}
