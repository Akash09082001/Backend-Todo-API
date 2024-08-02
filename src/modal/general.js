const general = async uid => {
	let data = {
		createdAt: new Date(),
		updatedAt: new Date(),
		createdBy: uid,
		updatedBy: uid,
	}
	return data
}

const timestamp = async () => {
	let data = {
		createdAt: new Date(),
		updatedAt: new Date(),
	}
	return data
}

const updateTimestamp = async uid => {
	let data = {
		updatedBy: uid,
		updatedAt: new Date(),
	}
	return data
}

export { general, timestamp, updateTimestamp }
