const { UserModel } = require("../models/user.model")

class UsersService {
	createUser(userInfo) {
		const user = new UserModel(userInfo)
	
		await user.save()
	}
}

module.exports = { usersService: new UsersService() }
