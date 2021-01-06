const User = require('../models/User')
const { saveUser } = require('../services/users')

class UserController {
	async createUser(userInfo) {
		const user = new User(userInfo)

		try {
			await saveUser(user)
		} catch (e) {
			throw e
		}
	}
}

module.exports = UserController
