const usersService = require('../services/users.service')
const usersRouter = require('express').Router()

usersRouter.post('/users/', async (req, res) => {
    try {
        const result = await usersService.createUser()
        res.json(result)
	} catch (err) {
		res.json(err)
	}
})

module.exports = { usersRouter }
