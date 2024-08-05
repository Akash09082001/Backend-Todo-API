import { success } from "../../configs/response.js"
import { createHelper, getAllHelper, getOneHelper, updateOneHelper } from "../../helper/v1/todo.js"

export const addTodo = (req, res) => {
	let body = req.body
	createHelper(body)
		.then(async result => {
			res.status(result.code).json(
				success(
					"Todo created successfully",
					{
						data: result.data
					},
					res.statusCode
				)
			)
		})
		.catch(error => {
			res.status(500).json(
				success(
					"Error created Todo",
					{
						data: {
							error: error?.message || "Internal server error"
						}
					},
					res.statusCode
				)
			)
		})
}

export const getAllTodo = (req, res) => {
	getAllHelper()
		.then(async result => {
			res.status(result.code).json(
				success(
					"Todos Found successfully",
					{
						data: result.data
					},
					res.statusCode
				)
			)
		})
		.catch(error => {
			res.status(500).json(
				success(
					"Error in Finding Todos",
					{
						data: {
							error: error?.message || "Internal server error"
						}
					},
					res.statusCode
				)
			)
		})
}

export const getOneTodo = (req, res) => {
	let uid = req.params.id;
	getOneHelper(uid)
		.then(async result => {
			res.status(result.code).json(
				success(
					"Todo Found successfully",
					{
						data: result.data
					},
					res.statusCode
				)
			)
		})
		.catch(error => {
			res.status(500).json(
				success(
					"Error in Finding Todo",
					{
						data: {
							error: error?.message || "Internal server error"
						}
					},
					res.statusCode
				)
			)
		})
}

export const updateOneTodo = (req, res) => {
	const uid = req.params.id;
	let body = req.body
	updateOneHelper({ uid, body })
		.then(async result => {
			res.status(result.code).json(
				success(
					"Todo Updated successfully",
					res.statusCode
				)
			)
		})
		.catch(error => {
			res.status(500).json(
				success(
					"Error in Updating Todo",
					{
						data: {
							error: error?.message || "Internal server error"
						}
					},
					res.statusCode
				)
			)
		})
}