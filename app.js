const express = require("express");
const mongoose = require("mongoose");
const { json, urlencoded } = require("express");
const controller = require("./controllers/TodoController");
const Todo = require("./models/TodoModel");
const routes = require("./routes/TodoRouter");

const app = express();
mongoose
  .connect("mongodb://localhost:27017/todoApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo Connection is Open");
  })
  .catch((err) => {
    console.log("Wahala Dy o ma G");
    console.log(err);
  });

app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
