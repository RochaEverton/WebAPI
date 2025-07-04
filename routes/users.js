const express = require('express');
const router = express.Router();
const db = require("../models/db");
const userSchema = require('../models/userSchema');

router.get('/', (req, res, next) => {
  res.json(db.findUsers())
});

router.get('/:id', (request, response) => {
  const id = request.params.id;
  response.json(db.findUser(id));
})

router.post('/', (request, response) => {
  const { error } = userSchema.validate(request.body);
  if(error){
    return response.status(422).json({error: error.details})
  } else {
    const user = db.insertUser(request.body);
    response.status(201).json(user);
  }
})

router.put('/:id', (request, response) => {
  const id = request.params.id;
  const user = db.updateUser(id, request.body, true);
  response.status(200).json(user);
})

router.patch('/:id', (request, response) => {
  const id = request.params.id;
  const user = db.updateUser(id, request.body, false);
  response.status(200).json(user);
})

router.delete('/:id', (request, response) => {
  const id = request.params.id;
  db.deleteUser(id);
  response.status(200).json({})
})
module.exports = router;
