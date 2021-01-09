const { body, validationResult } = require('express-validator')

class validator {
    userValidationRules = () => {

        console.log(body)
        return [
            // username must be an email
            body("email").isEmail(),
            body("mobile").isLength(10),
        ]
    }

    validate = (req, res) => {
        console.log("check 1")
        const errors = validationResult(req)
        console.log(errors)

        if (!errors.isEmpty())
            return res.status(500).send({ "message": "error happened" })

    }
}

module.exports = new validator()