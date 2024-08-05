import { general } from "./general.js"

const addTodo = async (body) => {
	let generic = await general()
	let data = {
		...generic,
		title: body?.title,
		description: body?.description,
	}
	return data
}

export { addTodo as addTodoSchema }
