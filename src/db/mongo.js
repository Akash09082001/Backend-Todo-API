import "dotenv/config"
import { MongoClient } from "mongodb"

let _db, todo_coll
const mongoConnect = async () => {
	new Promise(async (resolve, reject) => {
		MongoClient.connect(process.env.COMMUNITY_URI, {
			useUnifiedTopology: true,
		})
			.then(async client => {
				_db = await client.db()
				todo_coll = _db.collection("todo")
				resolve()
			})
			.catch(err => {
				reject(err)
			})
	})
		.then(async () => {
			console.log("Databse plugged in and healthy to serve.!")
		})
		.catch(err => {
			console.log("Error connecting to database")
			console.log(err)
		})
}

const todocoll = async () => {
	if (todo_coll) return todo_coll
	throw "todo collection not found"
}

export { mongoConnect, todocoll }
