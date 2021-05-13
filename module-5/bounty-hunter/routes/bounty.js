const express = require("express");
const bountyRouter = express.Router();
const BountyItem = require('../models/bounty.js');



bountyRouter.get("/", (req, res, next) => {
    console.log("GET ITEMS")
    BountyItem.find((err, bounties) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

bountyRouter.post("/", (req, res, next) => {
    const newBounty = new BountyItem(req.body)
    newBounty.save((err, savedBounty) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})

bountyRouter.delete("/:itemId", (req, res, next) => {
    BountyItem.findOneAndDelete({ _id: req.params.itemId }, (err, deletedItem) => {
        if (err) {
            res.status(500);
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.name} from the db`)
    })
})

// bountyRouter.put("/:itemId", (req, res, next) => {
//     InventoryItem.findOneAndUpdate(
//         { _id: req.params.itemId }, //find the one to update
//         req.body, // update the object with this data
//         { new: true }, //send updated version
//         (err, updatedItem) => {
//             if (err) {
//                 res.status(500);
//                 return next(err)
//             }
//             return res.status(201).send(updatedItem)
//         }
//     )
// })

// const bounties = [
//     {
//         fName: "Mike",
//         lName: "Moon",
//         living: true,
//         imgURL: "https://images.pexels.com/photos/7465116/pexels-photo-7465116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//         bounty: 1000000,
//         type: "Jedi",
//         _id: 1203443
//     },
//     {
//         fName: "Sally",
//         lName: "Jenkin",
//         living: false,
//         imgURL: "https://images.pexels.com/photos/7465116/pexels-photo-7465116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000",
//         bounty: 1,
//         type: "Sith",
//         _id: 1203443
//     },
//     {
//         fName: "Mark",
//         lName: "Perui",
//         living: true,
//         imgURL: "https://images.pexels.com/photos/7465116/pexels-photo-7465116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000",
//         bounty: 1000000,
//         type: "Jedi",
//         _id: 1203443
//     },
//     {
//         fName: "Jenna",
//         lName: "Blackson",
//         living: false,
//         imgURL: "https://images.pexels.com/photos/7465116/pexels-photo-7465116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000",
//         bounty: 1234,
//         type: "Sith",
//         _id: 1203443
//     },
//     {
//         fName: "James",
//         lName: "Capi",
//         living: true,
//         imgURL: "https://images.pexels.com/photos/7465116/pexels-photo-7465116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000",
//         bounty: 4563456,
//         type: "Jedi",
//         _id: 1203443
//     }
// ];


module.exports = bountyRouter;