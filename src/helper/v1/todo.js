import { todocoll } from "../../db/mongo.js";
import { addTodoSchema } from "../../modal/todo.js";


export const createHelper = async (body, _id) => {
    return new Promise(async (resolve, reject) => {
        const todo_coll = await todocoll();
        todo_coll.findOne({ _id: body?._id })
            .then(async todoCheck => {
                if (todoCheck) {
                    let resp = {
                        code: 409,
                        error: true,
                        message: "Todo already exists",
                        data: verticalCheck,
                    }
                    reject(resp)
                }
                else {
                    let data = await addTodoSchema(body)
                    todo_coll.insertOne(data)
                        .then(async createTodo => {
                            let resp = {
                                code: 200,
                                error: false,
                                message: "Todo created successfully",
                                data: data,
                            }
                            resolve(resp)
                        })
                        .catch(err => {
                            let resp = {
                                code: 500,
                                error: true,
                                message: err.message,
                            }
                            reject(resp)
                        })
                }
            })
            .catch(err => {
                let resp = {
                    code: 500,
                    error: true,
                    message: err.message,
                }
                reject(resp)
            })
    })
}

export const getAllHelper = async () => {
    return new Promise(async (resolve, reject) => {
        const todo_coll = await todocoll();
        todo_coll.find().toArray()
            .then(async results => {
                if (results.length > 0) {
                    const data = results.map(result => result)
                    let resp = {
                        code: 200,
                        error: false,
                        message: "Todos Found successfully",
                        data: data
                    }
                    resolve(resp)
                }
                else {
                    let resp = {
                        code: 404,
                        error: true,
                        message: "Todo Collection Is Empty",
                    }
                    reject(resp)
                }
            })
            .catch(err => {
                let resp = {
                    code: 500,
                    error: true,
                    message: err.message,
                }
                reject(resp)
            })
    })
}

export const getOneHelper = (uid) => {
    return new Promise(async (resolve, reject) => {
        const todo_coll = await todocoll();
        todo_coll.findOne({ uid: uid })
            .then(async result => {
                let resp = {
                    code: 200,
                    error: false,
                    message: "Todo Found successfully",
                    data: result
                }
                resolve(resp)
            })
            .catch(err => {
                let resp = {
                    code: 500,
                    error: true,
                    message: err.message,
                }
                reject(resp)
            })
    });
};

export const updateOneHelper = ({ uid, body }) => {
    return new Promise(async (resolve, reject) => {
        const todo_coll = await todocoll();
        todo_coll.findOne({ uid: uid })
            .then(async () => {
                todo_coll.updateOne({ uid: uid }, {
                    $set: {
                        title: body?.title,
                        description: body?.description,
                    }
                })
                    .then(async () => {
                        let resp = {
                            code: 200,
                            error: false,
                            message: "Todo Update successfully",
                        }
                        resolve(resp)
                    })
                    .catch(err => {
                        let resp = {
                            code: 500,
                            message: "Internal Server Error", err,
                            error: true,
                            updated: false,
                        }
                        reject(resp)
                    })
            })
            .catch(err => {
                let resp = {
                    code: 500,
                    error: true,
                    message: err.message,
                }
                reject(resp)
            })
    })
}

export const deleteHelper = (uid) => {
    return new Promise(async (resolve, reject) => {
        const todo_coll = await todocoll();
        todo_coll.findOne({ uid: uid })
            .then(async () => {
                todo_coll.deleteOne({ uid: uid })
                    .then(async () => {
                        let resp = {
                            code: 200,
                            error: false,
                            message: "Todo Deleted successfully",
                        }
                        resolve(resp)
                    })
                    .catch(err => {
                        let resp = {
                            code: 500,
                            message: "Internal Server Error", err,
                            error: true,
                        }
                        reject(resp)
                    })
            })
            .catch(err => {
                let resp = {
                    code: 500,
                    error: true,
                    message: err.message,
                }
                reject(resp)
            })
    })
}