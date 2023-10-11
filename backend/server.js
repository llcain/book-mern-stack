require('dotenv').config();

// require express
const express = require('express');

const  myBookRoues = require('./routes/myBooks');

// express app
const app = express();

// middleware
app.use(express.json())

app.use((req, res,next) => {
    console.log(req.path, req.method)
    next();
});

// routes
app.use('/api/myBooks', myBookRoues)

// listen for request
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT);
});

