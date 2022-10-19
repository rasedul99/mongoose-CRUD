const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const todoSchema = require("../schemas/todoSchemas");
const Todo = new mongoose.model("Todo", todoSchema);

// get all todos

router.get("/", (req, res) => {});
// Get a todo By Id
router.get("/:id", (req, res) => {});
// Post Todo
router.post("/", async (req, res) => {
  const newTodo = new Todo(req.body);
  await newTodo.save((err) => {
    if (err) {
      res.status(500).json({
        error: "there was server side error",
      });
    } else {
      res.status(200).json({
        message: "succesfully inserted",
      });
    }
  });
});
// Post Mutiple Todos
router.post("/all", async (req, res) => {
  await Todo.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: "there was server side error",
      });
    } else {
      res.status(200).json({
        message: "succesfully inserted",
      });
    }
  });
});
// Put Todo
router.put("/:id", (req, res) => {});
// Delete Todo
router.delete("/:id", (req, res) => {});

module.exports = router;
