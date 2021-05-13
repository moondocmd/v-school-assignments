const express = require("express");
const inventoryRouter = express.Router();
const InventoryItem = require('../models/inventory.js');

inventoryRouter.get("/", (req, res, next) => {
    console.log("GET ITEMS")
    InventoryItem.find((err, items) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

inventoryRouter.post("/", (req, res, next) => {
    const newItem = new InventoryItem(req.body)
    newItem.save((err, savedItem) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})

inventoryRouter.delete("/:itemId", (req, res, next) => {
    InventoryItem.findOneAndDelete({ _id: req.params.itemId }, (err, deletedItem) => {
        if (err) {
            res.status(500);
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.name} from the db`)
    })
})

inventoryRouter.put("/:itemId", (req, res, next) => {
    InventoryItem.findOneAndUpdate(
        { _id: req.params.itemId }, //find the one to update
        req.body, // update the object with this data
        { new: true }, //send updated version
        (err, updatedItem) => {
            if (err) {
                res.status(500);
                return next(err)
            }
            return res.status(201).send(updatedItem)
        }
    )
})

module.exports = inventoryRouter;