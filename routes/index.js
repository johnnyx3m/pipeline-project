var express = require('express');
var router = express.Router();
var { Todos } = require('./../models/Todos')



/* GET home page. */
router.get('/', async function(req, res, next) {
  const todos = await Todos.find()
  res.render('index', { title: 'Todos', todos });
});

module.exports = router;
