import { Router } from "express"
import { addTodo, deleteTodo, getAllTodo, getOneTodo, updateOneTodo } from "../../controllers/v1/todo.js"

const todoRouter = Router()

todoRouter.post("/add", addTodo)
todoRouter.get("/all", getAllTodo)
todoRouter.get("/:id", getOneTodo)
todoRouter.put("/edit/:id", updateOneTodo)
todoRouter.delete("/delete/:id", deleteTodo)

export { todoRouter }
