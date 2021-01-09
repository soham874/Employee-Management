const { body, validationResult } = require('express-validator');


class validator {

    validation = () => {
        console.log(body('firstName'))

        body('firstName').isEmail(), body('password').isLength({ min: 5 }),

            (req, res) => {
                const errors = validationResult(req);

                if (!errors.isEmpty())
                    return res.status(400).json({ errors: errors.array() });
            }
    }
}

module.exports = new validator()