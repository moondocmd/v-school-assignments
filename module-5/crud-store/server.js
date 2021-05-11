const express = require("express");
const app = express();
const morgan = require('morgan');
const mongose = require('mongoose');

app.use(express.json());
app.use(morgan('dev'));

//connect to db
mongose.connect('mongodb://localhost:27017/inventorydb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    ()=> console.log("Connected to MongoDB"))

app.use("/items", require('./routes/inventory.js'))

app.listen(9000, () => {
    console.log("The server is running on port 9000");
})