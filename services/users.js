async function saveUser(user) {
	try {
		await user.save()
	} catch (e) {
		throw e
	}
}

module.exports = {
	saveUser
}
