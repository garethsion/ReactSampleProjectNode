const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute)

app.get('/', (req,res) => {
    res.send("Welcome to the homepage!");
});

mongoose.connect(process.env.DB_CONNECTION, 
    {useNewUrlParser: true, useUnifiedTopology: false}).then(() => {
        console.log("Connected to Database");
    }).catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

app.listen(5000)