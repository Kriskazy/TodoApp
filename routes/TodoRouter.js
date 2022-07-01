const express = require("express");

const router = express.Router();
const controller = require("../controllers/TodoController");

router.get("/", controller.home);

// Add Todo
router.post("/addtodo", controller.addTodo);

// get Todos
router.get("/alltodos", controller.getTodos);

// // Get Single Todo
router.get("/:id", controller.singleTodo);

// //update Todo

router.put("/updatetodo/:id", controller.updateTodo);

// // delete Todo

router.delete("/deletetodo/:id", controller.deleteTodo);

module.exports = router;
