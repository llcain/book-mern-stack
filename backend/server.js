require('dotenv').config();

// require express
const express = require('express');

const  myBookRoues = require('./routes/myBooks');

// express app
const app = express();

// require mongoose
const mongoose = require('mongoose');

// middleware
app.use(express.json());

app.use((req, res,next) => {
    console.log(req.path, req.method)
    next();
});

// routes
app.use('/api/myBooks', myBookRoues)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for request
        app.listen(process.env.PORT, () => {
         console.log('connected to db & listening on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error)
    })



