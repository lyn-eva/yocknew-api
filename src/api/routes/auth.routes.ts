import { Router } from 'express';
const router: Router = require('express').Router();

router.post('/register', (req, res) => {
  // register a user
});
router.put('/login', (req, res) => {
  // login an item
});
router.put('/forgot-pwd', (req, res) => {
  // reset password
});
router.delete('/logout', (req, res) => {
  // delete an item
});

module.exports = router;
