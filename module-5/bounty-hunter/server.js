const express = require("express");
const app = express();
const morgan = require('morgan');
const mongose = require('mongoose');

app.use(express.json());
app.use(morgan('dev'));

//connect to db
mongose.connect('mongodb://localhost:27017/bountydb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    ()=> console.log("Connected to MongoDB"))

app.use("/bounties", require('./routes/bounty.js'))

app.listen(9000, () => {
    console.log("The server is running on port 9000");
})

/////// OLD SERVER

// const express = require ("express");
// const app = express();
// const { v4: uuid } = require('uuid');
// const morgan = require('morgan');

// app.use(express.json());
// app.use(morgan('dev'));

// app.listen(9000, () => {
//     console.log("The server is running on port 9000!");
// })

// import { bounties } from "./bountyData";

// const bounties = [
//     { 
//         fName: "Mike", 
//         lName: "Moon", 
//         living: true, 
//         imgURL: "https://images.pexels.com/photos/7465116/pexels-photo-7465116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
//         bounty: 1000000, 
//         type: "Jedi",  
//         _id: uuid() },
//     { 
//         fName: "Sally", 
//         lName: "Jenkin", 
//         living: false, 
//         imgURL: "https://images.pexels.com/photos/7465116/pexels-photo-7465116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000",
//         bounty: 1, 
//         type: "Sith",  
//         _id: uuid() },
//     { 
//         fName: "Mark", 
//         lName: "Perui", 
//         living: true, 
//         imgURL: "https://images.pexels.com/photos/7465116/pexels-photo-7465116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000",
//         bounty: 1000000, 
//         type: "Jedi" , 
//         _id: uuid() },
//     { 
//         fName: "Jenna", 
//         lName: "Blackson", 
//         living: false, 
//         imgURL: "https://images.pexels.com/photos/7465116/pexels-photo-7465116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000",
//         bounty: 1234, 
//         type: "Sith",  
//         _id: uuid() },
//     { 
//         fName: "James", 
//         lName: "Capi", 
//         living: true, 
//         imgURL: "https://images.pexels.com/photos/7465116/pexels-photo-7465116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000",
//         bounty: 4563456, 
//         type: "Jedi",  
//         _id: uuid()}
// ];



// app.get("/",(req,res)=>{
//     res.send(bounties);
// });

// app.get("/bounties", (req, res) => {
//     res.send(bounties);
// });

// app.post("/bounties", (req, res) => {
//     const newBounty = req.body;
//     newBounty._id = uuid();
//     bounties.push(newBounty);
//     res.send(newBounty);
// });

// app.delete('/:bountyId', (req, res) => {
//     const deleteId = req.params.bountyId;
//     const deleteIndex = bounties.findIndex(bounty => bounty._id === deleteId);
//     bounties.splice(deleteIndex, 1);
//     res.send(`Bounty removed`);
// });

// app.put('/:bountyId', (req, res) => {
//     const bountyId = req.params.bountyId;
//     const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId);
//     const updatedBounty = Object.assign(bounties[bountyIndex], req.body);
//     res.send(updatedBounty);
// })