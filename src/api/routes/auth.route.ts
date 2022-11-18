import { Router } from 'express';
import {
  confirmRegisteration,
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

router.get('/confirm/:id', confirmRegisteration);

router.put('/forgot-pwd', (req, res) => {
  // reset password
});

module.exports = router;
// {"username": "Owari", "email": "owari@sekai.no", "sekainoowari"}
