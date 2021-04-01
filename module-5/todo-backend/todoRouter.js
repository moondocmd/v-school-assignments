const express = require("express");
const { v4: uuid } = require('uuid');
const todoRouter = express.Router();

const todos = [
    {
        name: "Todo 1 Name",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuid()
    }, {
        name: "Todo 2 Name",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuid()
    }, {
        name: "Todo 3 Name",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuid()
    }, {
        name: "Todo 4 Name",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuid()
    }, {
        name: "Todo 55 Name",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuid()
    },
];

todoRouter.route("/")
    .get((req, res) => {
        res.send(todos);
    })
    .post((req, res) => {
        const newTodo = req.body;
        newTodo._id = uuid();
        todos.push(newTodo);
        res.send(`Successfully added ${newTodo.name} to the db`);
    })

todoRouter.get("/:todoId", (req, res) => {
    res.send(todos.find(todo => todo._id === req.params.todoId))
})

todoRouter.put("/:todoId", (req, res) => {
    const index = todos.findIndex(todo => todo._id === req.params.todoId);
    const updatedTodo = Object.assign(todos[index], req.body);
    res.send(updatedTodo);
})

todoRouter.delete('/:todoId', (req, res) => {
    const deleteId = req.params.todoId;
    console.log("Deleting: ", deleteId);
    const deleteIndex = todos.findIndex(todo => todo._id === deleteId);
    todos.splice(deleteIndex, 1);
    res.send(`todo removed`);
})

module.exports = todoRouter;