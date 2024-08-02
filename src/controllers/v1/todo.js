import { error, success } from "../../configs/response.js"
import { addTodoHelper, getAllTodoHelper } from "../../helper/v1/todo.js"

const addTodo = (req, res) => {
	let data = req.body
	addTodoHelper(data)
		.then(result => {
			if (result.status === "success") {
				res.status(200).json(
					success(
						"Task added successfully",
						{ data: result },
						res.statusCode
					)
				)
			} else {
				res.status(500).json(
					error(
						"Getting error while adding task",
						{ data: result.message },
						res.statusCode
					)
				)
			}
		})
		.catch(err => {
			res.status(500).json(
				error(
					"An error occurred while adding the task. Please try again later.",
					{ data: err.message },
					res.statusCode
				)
			)
		})
}

const getAllTodos = (req, res) => {
	const query = req.query._id
	getAllTodoHelper(query)
		.then(result => {
			if (result.status === "success") {
				res.status(200).json(
					success(
						"Todos get successfully",
						{ data: result },
						res.statusCode
					)
				)
			} else {
				res.status(500).json(
					error(
						"Getting error while getting todo",
						{ data: result.message },
						res.statusCode
					)
				)
			}
		})
		.catch(err => {
			res.status(500).json(
				error(
					"An error occurred while adding the todos. Please try again later.",
					{ data: err.message },
					res.statusCode
				)
			)
		})
}

export { addTodo, getAllTodos }
