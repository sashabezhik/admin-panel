const express = require('express')
const { connect } = require('mongoose')
const partials = require('express-partials')
const { configService } = require('./config/config.service')
const { usersRouter } = require('./users/users.controller')

class AppServer {
	constructor() {
		this.init()
	}

	init() {
		const app = express()

		app.set('view engine', 'ejs')
		
		app.use(express.json())
		app.use(partials())
		app.use('/api', usersRouter)

		this.port = configService.port || 3000
	}

	start() {
		try {
			await connect(configService.mongoUri, {
				useNewUrlParser: true,
				useUnifiedTopology: true
			})
	
			app.listen(this.port, () => console.log(`Server is listening on port: ${this.port}`))
		} catch (err) {
			console.log(err)
		}
	}	
}

module.exports = { appServer: new AppServer() }
