
const express = require ("express");
const app = express();
const { v4: uuid } = require('uuid')

app.use(express.json());

app.listen(9000, () => {
    console.log("The server is running on port 9000");
})

const bounties = [
    { fName: "Mike", lName: "Moon", living: true, bounty: 1000000, Type: "Jedi",  _id: uuid() },
    { fName: "Sally", lName: "Jenkin", living: false, bounty: 1, Type: "Sith",  _id: uuid() },
    { fName: "Mark", lName: "Perui", living: true, bounty: 1000000, Type: "Jedi" , _id: uuid() },
    { fName: "Jenna", lName: "Blackson", living: false, bounty: 1234, Type: "Sith",  _id: uuid() },
    { fName: "James", lName: "Capi", living: true, bounty: 4563456, Type: "Jedi",  _id: uuid()}
];

app.get("/bounties", (req, res) => {
    res.send(bounties);
})

app.post("/bounties", (req, res) => {
    const newBounty = req.body;
    newBounty._id = uuid();
    bounties.push(newBounty);
    res.send(`Successfully added ${newBounty.fName} to the db`);
})

app.delete('/:bountyId', (req, res) => {
    const deleteId = req.params.bountyId;
    const deleteIndex = bounties.findIndex(bounty => bounty._id === deleteId);
    bounties.splice(deleteIndex, 1);
    res.send(`Bounty removed`);
})