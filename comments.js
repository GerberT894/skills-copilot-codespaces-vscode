// create a Web server
// npm install express body-parser
// npm install nodemon
// run the server: nodemon comments.js

// Import the express library
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of the express server
const app = express();

// To parse the body of a POST request
app.use(bodyParser.json());

// Create a list of comments
const comments = [
    {username: 'alice', comment: 'I love cats!'},
    {username: 'bob', comment: 'I love dogs!'},
];

// Handle GET request to /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Handle POST request to /comments
app.post('/comments', (req, res) => {
    // req.body is the body of the POST request
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});