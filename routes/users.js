const express = require('express');
const router = express.Router();
const db = require("../db")

router.get('/', (req, res, next) => {
  res.json(db.findUsers())
});

router.post('/', (request, response) => {
  const user = db.insertUser(request.body);
  response.status(201).json(user);
})

router.put('/:id', (request, response) => {
  const id = request.params.id;
  const user = db.updateUser(id, request.body);
  response.status(200).json(user);
})

router.delete('/:id', (request, response) => {
  const id = request.params.id;
  db.deleteUser(id);
  response.status(200).json({})
})
module.exports = router;
