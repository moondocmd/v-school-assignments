const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: Number
})

module.exports = mongoose.model("InventoryModel", inventorySchema)

// const inventoryItems = [
//     {
//         name: "banana",
//         type: "food",
//         price: 200,
//     }, {
//         name: "pants",
//         type: "clothing",
//         price: 2500,
//     }, {
//         name: "basket ball",
//         type: "toy",
//         price: 1000,
//     }, {
//         name: "rockem sockem robots",
//         type: "toy",
//         price: 1500,
//     }, {
//         name: "shirt",
//         type: "clothing",
//         price: 800,
//     }, {
//         name: "soup",
//         type: "food",
//         price: 300,
//     }, {
//         name: "flour",
//         type: "food",
//         price: 100,
//     }
// ]