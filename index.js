// Make an express app

const express = require('express');
const app = express();

// Make a router
const router = express.Router();

// Make a route
router.get('/', (req, res) => {
	  // Send index.html to the client
	  console.log('Sending ./index.html to the client {GET /}');
	  res.sendFile(__dirname + '/index.html');
});

// Use the router
app.use('/', router);

// Start the server
app.listen(3000, () => {
	  console.log('Example app listening on port 3000!');
});

// Path: index.test.js