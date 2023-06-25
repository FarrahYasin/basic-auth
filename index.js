'use strict';

require('dotenv').config();
const { start } = require('./src/server'); // im destructuring the exported object to get the start function(the start property) from it 
const { db } = require('./src/auth/models/index');

const PORT=process.env.PORT || 5002;

// start(PORT);

db.sync().then(() => {//db--> db that we exported from the index model (for the sequlize)
    start(PORT)
}).catch(err=> console.log(err));

