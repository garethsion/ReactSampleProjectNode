const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute)

app.get('/', (req,res) => {
    res.send("Welcome to the homepage!");
});

// Connect to db
// mongoose.connect("mongodb+srv://garethsion:h=6.626*10^-34@rest.dswdi.mongodb.net/rest?retryWrites=true&w=majority", 
//     {useNewUrlParser: true, useUnifiedTopology: false },
//     ()=>{
//     console.log("Connected to database");
//     console.log('mongoose readyState is ' + mongoose.connection.readyState);
// });

mongoose.connect(process.env.DB_CONNECTION, 
    {useNewUrlParser: true, useUnifiedTopology: false}).then(() => {
        console.log("Connected to Database");
    }).catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Yay!")
  // we're connected!
});

// mongoose.disconnect();


// const MongoClient = require('mongodb').MongoClient;
// const uri = process.env.DB_CONNECTION;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: false });
// client.connect(err => {
//   const collection = client.db("rest").collection("posts");
//   // perform actions on the collection object
//   console.log('Connected to database')
//   client.close();
// //   console.log("Connection closed")
// });


app.listen(5000)