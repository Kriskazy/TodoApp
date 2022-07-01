const Todo = require("../models/TodoModel");

exports.home = (req, res) => {
  console.log(req.body);
  res.send("Controller is working fine");
};

// Add New Todo
exports.addTodo = async (req, res) => {
  const newTodo = new Todo(req.body);
  await newTodo.save();
  res.json(newTodo);
};

// Get all Todos
exports.getTodos = async (req, res) => {
  const todos = await Todo.find({});
  console.log(todos);
  res.json(todos);
};

// // Get Single Todo
exports.singleTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  if (!this.singleTodo) {
    return res.json({ message: "Todo not found" });
  }
  res.json(todo);
};

// // Update Todo
exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });

  res.json(updatedTodo);
};

// // Delete Todo
exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  const deletedTodo = await Todo.findByIdAndDelete(id);
  res.redirect("/alltodos");
};
