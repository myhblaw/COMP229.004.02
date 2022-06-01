const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Home Page')
  })  

app.get('/hello', helloWorld)
})

function helloWorld(req, res) {
    res.send('Hello World'

// runs the app
app.listen(3000)