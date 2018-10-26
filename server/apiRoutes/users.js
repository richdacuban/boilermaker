const router = require('express').Router();

//get request for /api/users/
router.get('/', (req, res, next) => {
  //routing code goes here
});

//post for /api/users
router.post('/', function(req, res, next) {
  //routing code here
});

//put /api/users/:userId
router.put('/:userId', function(req, res, next) {
  //don't forget req.params.userId should match /:userId
});

//delete req for /api/users/:userId
router.delete('/:userId', (req, res, next) => {
  //routing delete code to send to db
});

module.exports = router;
