const { body, validationResult } = require('express-validator')


class validator {
    userValidation = () => {
        return [
            body('email').isEmail(),
            body('mobile').isLength({ min: 5 })
        ]
    }

    validate = (req, res, next) => {
        const result = validationResult(req);
        if (result.isEmpty()) {
            return next();
        }
        res.status(422).json({ errors: result.array() })
    }


}

module.exports = new validator()