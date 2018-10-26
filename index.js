'use strict';

// const { db } = require('./server/db');
const app = require('./server');
const port = process.env.PORT || 1337;

// db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
// .then(() => {
app.listen(port, () => console.log(`Server listening on port ${port}`));
// });
