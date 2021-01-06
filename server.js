const config = require('config')
const express = require('express')
const mongoose = require('mongoose')
const partials = require('express-partials')

const app = express()

app.set('view engine', 'ejs')

app.use(express.json())
app.use(partials())

const mongoUri = config.get('mongoUri')
const PORT = process.env.PORT || 3000

async function startServer() {
	try {
		await connect(mongoUri, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})

		app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))
	} catch (e) {
		console.log(e)
	}
}

startServer()
