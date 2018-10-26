const router = require('express').Router();
const users = require('./users');

// individual sub routes go here i.e. so that if a client sends a request for anything xxxxx/api/ then the /server/.index.js file will app.use serve them up to this file and so this file can then router.use('/users', require('./users')). what's happening here is that a request for webAddress/api/users has come in and the server index.js has sent that /api/ request to this folder and here is another index.js and this one will send the /api/users request to the ./users.js route file in this same folder. the require('./users') can be aliased out beforehand. these are the back end express routes.

// Don't forget to export!

router.use('/users', users);

// include further subroutes here

//404 not found handling:

router.use(function(req, res, next) {
  const err = new Error('Not Found.');
  err.status = 404;
  next(err);
});

module.exports = router;
