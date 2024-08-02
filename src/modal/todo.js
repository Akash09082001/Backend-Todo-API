import { general } from "./general.js"

const addTodo = async todoData => {
	let generic = await general()
	let data = {
		...generic,
		...todoData,
	}
	return data
}

export { addTodo as addTodoSchema }
