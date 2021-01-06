class ConfigService {
    constructor() {
        this.mongoUri = process.env.MONGO_URI
        this.port = Number(process.env.PORT)
    }
}

module.exports = { configService: new ConfigService() }
