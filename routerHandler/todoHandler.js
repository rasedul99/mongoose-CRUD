const express = require("express");

const router = express.Router();

// get all todos

router.get("/", (req, res) => {});
// Get a todo By Id
router.get("/:id", (req, res) => {});
// Post Todo
router.post("/", (req, res) => {});
// Post Mutiple Todos
router.post("/all", (req, res) => {});
// Put Todo
router.put("/:id", (req, res) => {});
// Delete Todo
router.delete("/:id", (req, res) => {});

module.exports = router;
