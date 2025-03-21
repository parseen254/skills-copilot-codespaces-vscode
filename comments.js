// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

// Use body-parser to parse the body of the request
app.use(bodyParser.json());

// Array to store comments
let comments = [];

// Route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Route to add a comment
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.json(comment);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});