const express = require('express'); // "require" the Express module
const path = require('path');
const app = express(); // obtain the "app" object
const HTTP_PORT = process.env.PORT || 8080; // assign a port

// start the server on the port and output a confirmation ot the console
app.listen(HTTP_PORT, () => console.log(`server listening on: ${HTTP_PORT}`));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});



