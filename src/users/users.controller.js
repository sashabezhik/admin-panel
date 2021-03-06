const { validate } = require('../validate/validate.middleware')
const { createUserDto } = require('./dto/create-user.dto')
const usersService = require('./users.service')
const usersRouter = require('express').Router()

usersRouter.post('/users/', validate(createUserDto), async (req, res) => {
    try {
        const result = await usersService.createUser()
        res.json(result)
	} catch (err) {
		res.json(err)
	}
})

module.exports = { usersRouter }
