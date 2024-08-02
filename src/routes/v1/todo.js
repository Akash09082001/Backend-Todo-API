import { Router } from "express"
import { addTodo, getAllTodos } from "../../controllers/v1/todo.js"

const todoRouter = Router()

todoRouter.post("/add", addTodo)
todoRouter.get("/all", getAllTodos)

export { todoRouter }
