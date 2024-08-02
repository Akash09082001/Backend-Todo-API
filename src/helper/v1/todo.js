import { todocoll } from "../../db/mongo.js";
import { addTodoSchema } from "../../modal/todo.js";


const addTodoHelper = (data) => {
    return new Promise(async (resolve, reject) => {
        const todo_coll = await todocoll();
        let addData = await addTodoSchema(data);
        todo_coll.insertOne(addData)
            .then(result => {
                resolve({
                    status: "success",
                    error: false,
                    message: "Todo added successfully"
                });
            })
            .catch(err => {
                reject({
                    status: "error",
                    error: true,
                    message: err.message || "An error occurred while adding the Todo"
                });
            });
    })
}

const getAllTodoHelper = (query) => {
    return new Promise(async (resolve, reject) => {
        const todo_coll = await todocoll();
        todo_coll.find(query).toArray()
            .then(results => {
                if (results.length > 0) {
                    let todoIds = results.map(todo => todo)
                    resolve({
                        status: "success",
                        error: false,
                        message: "Todos Found successfully",
                        data: todoIds
                    });
                }
            })
            .catch(err => {
                reject({
                    status: "error",
                    error: true,
                    message: err.message || "An error occurred while geting the todos"
                });
            });
    })
}


export { addTodoHelper, getAllTodoHelper };
