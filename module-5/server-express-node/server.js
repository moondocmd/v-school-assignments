const express = require ("express");
const app = express();
const inventoryRouter = express.Router();
const morgan = require('morgan');
const mongose = require('mongoose');
const InventoryItem = require('./models/inventoryItem.js');

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

app.listen(9000, () => {
    console.log("The server is running on port 9000");
})

inventoryRouter.get("/", (req, res, next) => {
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

// const inventoryItems = [
//     {
//         name: "banana",
//         type: "food",
//         price: 200,
//     },{
//         name: "pants",
//         type: "clothing",
//         price: 2500,
//     },{
//         name: "basket ball",
//         type: "toy",
//         price: 1000,
//     },{
//         name: "rockem sockem robots",
//         type: "toy",
//         price: 1500,
//     },{
//         name: "shirt",
//         type: "clothing",
//         price: 800,
//     },{
//         name: "soup",
//         type: "food",
//         price: 300,
//     },{
//         name: "flour",
//         type: "food",
//         price: 100,
//     }
// ]

app.get("/fruit", (req, res) => {
    console.log(req.query);
    if (Object.keys(req.query).length > 0){
        const type = req.query.type;
        const filteredItems = inventoryItems.filter(item => item.type === type);
        res.send(filteredItems);
    }
    else { res.send(inventoryItems); }
});

