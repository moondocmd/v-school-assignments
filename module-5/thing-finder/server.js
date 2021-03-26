const express = require ("express");
const app = express();

app.use(express.json());

app.listen(9000, () => {
    console.log("The server is running on port 9000");
})

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]

app.get("/fruit", (req, res) => {
    console.log(req.query);
    if (Object.keys(req.query).length > 0){
        const type = req.query.type;
        const filteredItems = inventoryItems.filter(item => item.type === type);
        res.send(filteredItems);
    }
    else { res.send(inventoryItems); }
});

