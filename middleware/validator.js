const { body, validationResult } = require('express-validator')


class validator {

    userValidation = () => {
        return [

            body('firstName').isLength({ min: 3 }).withMessage('First name not matching'),
            body('lastName').isLength({ min: 3 }).withMessage('Last Name not matching'),
            body('email').isEmail().withMessage('Email not matching'),
            body('mobile').isNumeric().isLength({ min: 10, max: 10 }).withMessage('Phone number not matching'),
            body('companyName').isLength({ min: 3 }).withMessage('Company Name not matching'),
            body('salary'),
            body('designation').isLength({ min: 3 }).withMessage('Designation not matching'),

            this.validate
        ]
    }

    validate = (req, res, next) => {
        const result = validationResult(req);
        if (result.isEmpty())
            return next();

        res.status(400).json({ errors: result.array() })
    }


}

module.exports = new validator()