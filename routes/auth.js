const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.post('/api/users/new', async (req, res) => {
	const userController = new UserController()

	try {
		await userController.createUser()
	} catch (e) {
		console.log(e)
	}
})

module.exports = router
