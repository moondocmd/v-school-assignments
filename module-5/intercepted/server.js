
const express = require ("express");
const app = express();

app.use(express.json());

app.listen(9000, () => {
    console.log("The server is running on port 9000");
})

app.use("/items", (req, res, next) => {
    console.log("The items middleware was executed");
    next();
})

app.use("/items", (req, res, next) => {
    req.body = { name: "Mike "};
    next();
})

app.get("/items", (req, res, next) => {
    console.log("Get request received");
    res.send(req.body);
})