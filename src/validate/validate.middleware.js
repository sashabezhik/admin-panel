export const validate = (schema) => {
    return (req, res, next) => {
        const isValid = Joi.validate(bodyToValidate, schema)

        if (!isValid) {
            res.error("POSHEL NAHUI")
        } else {
            next()
        }
    }
}