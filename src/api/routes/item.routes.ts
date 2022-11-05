import { Router } from 'express';
const router: Router = require('express').Router();

router.get('/', (req, res) => {
  // send latest items
  // support search by category, name
  // support sort by date, bid
  res.send('deal').end();
});
router.post('/', (req, res) => {
  // creae an item
});
router.put('/', (req, res) => {
  // update an item
});
router.delete('/', (req, res) => {
  // delete an item
});

router.get('/:id', (req, res) => {
  // search item by id
  res.send(req.params.id).end();
});
router.get('/:id/bid', (req, res) => {
  // get a specific deal's bid
  res.send(req.params.id).end();
});
module.exports = router;
