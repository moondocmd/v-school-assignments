const express = require ("express");
const inventoryRouter = express.Router();
const InventoryItem = require('../models/inventory.js');

inventoryRouter.get("/", (req, res, next) => {
    console.log("GET ITEMS")
    InventoryItem.find((err, items)=>{
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

inventoryRouter.post("/", (req, res, next) => {
    const newItem = new InventoryItem(req.body)
    newItem.save((err, savedItem) => {
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})

module.exports = inventoryRouter;