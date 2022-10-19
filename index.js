const express = require("express");
const mongoose = require("mongoose");
const todoHandler = require("./routerHandler/todoHandler");

// express app initialization
const app = express();
app.use(express.json());

// database connection with mongoose
mongoose
  .connect("mongodb://localhost/todos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successfull"))
  .catch((err) => console.log(err));

// application route
app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/todo", todoHandler);
// default error handler
function errorHandler(err, req, res, next) {
  if (res.headerSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.listen(5000, () => {
  console.log("app listening at port 5000");
});
