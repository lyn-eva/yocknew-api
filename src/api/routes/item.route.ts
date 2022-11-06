import { Router } from 'express';
import { createItem, getItems, updateItem } from '../controller/item.controller';
const router: Router = require('express').Router();

// send latest items
// support search by category, name
// support sort by date, bid
router.get('/', getItems);

router.post('/', createItem);

router.put('/:itemId', updateItem);
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

const db = [
  {
    id: 1,
    descr: 'short description 50',
    at: '23/1/23',
    duration: '3days',
    current_bid: 30,
    imgs: [
      'https://i.ebayimg.com/images/g/IroAAOSw-L5fG0-r/s-l500.jpg',
      'https://i.ebayimg.com/images/g/IroAAOSw-L5fG0-r/s-l500.jpg',
    ],
    category: ['electronic', 'toy'],
    bids: [
      {
        at: '20/1/23',
        by: 34,
        bid: 32,
      },
    ],
  },
];
