import { Router } from "express"
import { addTodo, getAllTodo, getOneTodo } from "../../controllers/v1/todo.js"

const todoRouter = Router()

todoRouter.post("/add", addTodo)
todoRouter.get("/all", getAllTodo)
todoRouter.get("/:id", getOneTodo)

export { todoRouter }
