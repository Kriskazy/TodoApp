const mongoose = require("mongoose");
// Todo Schema for DB
const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", todoSchema);

// Exporting Module to be available in other files
module.exports = Todo;
