/*jshint esversion:6*/

var express = require('express');
var router = express.Router();
const Controller = require('../controller/createToDo');


router.post('/create', Controller.createToDo);

router.get('/datatodo',Controller.readToDo);

router.put('/update/:id',Controller.updateTodo);

router.delete('/deletetodo/:id',Controller.deleteTodo);

module.exports = router;
