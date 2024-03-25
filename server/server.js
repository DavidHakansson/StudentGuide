const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

// Serve static files from the React app
const reactAppPath = path.join(__dirname, '..', 'client', 'build');
app.use(express.static(reactAppPath));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(reactAppPath, 'index.html'));
});

app.listen(port, () => { 
    console.log(`Server listening on port ${port}`);
    });