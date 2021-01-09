let response = {}
let services = require('../Services/service')

const patternFirstName = RegExp('^[A-Z][a-z]{2,}$')
const patternPhoneNumber = RegExp('^[0-9]{10}$')
const patternEmail = RegExp('^[a-z0-9]+([._+-][a-z0-9]+)*(@)[0-9a-zA-Z]+[.]{1}[a-z]{2,3}([.][a-z]{2})?$')

class employeeController {

    createController = (req, res, next) => {

        try {
            // if (!this.validate(req)) {
            //     response.success = false
            //     response.message = "Information not according to pattern."
            //     return res.status(400).send(response)
            // }
            console.log("in controller")
            services.createService(req.body).then((result) => {
                response.success = true
                response.message = result.message
                response.data = result.data
                return res.status(200).send(response)
            }).catch((error) => {
                response.success = false
                response.message = error.message
                response.error = error.error
                return res.status(400).send(response)
            })
        } catch (err) {
            next(err)
        }

    }

    getController = (req, res, next) => {
        try {
            services.getService(req).then((result) => {
                response.success = true
                response.message = result.message
                response.data = result.data
                return res.status(200).send(response)
            }).catch((error) => {
                response.success = false
                response.message = error.message
                response.error = error.error
                return res.status(400).send(response)
            })
        } catch (err) {
            next(err)
        }
    }

    updateController = (req, res, next) => {
        try {
            services.updateService(req).then((result) => {
                response.success = true
                response.message = result.message
                response.data = result.data
                return res.status(200).send(response)
            }).catch((error) => {
                response.success = false
                response.message = error.message
                response.error = error.error
                return res.status(400).send(response)
            })
        } catch (err) {
            next(err)
        }
    }

    deleteController = (req, res, next) => {
        try {
            services.deleteService(req).then((result) => {
                response.success = true
                response.message = result.message
                response.data = result.data
                return res.status(200).send(response)
            }).catch((error) => {
                response.success = false
                response.message = error.message
                response.error = error.error
                return res.status(400).send(response)
            })
        } catch (err) {
            next(err)
        }
    }

    validate = (req) => {

        if (!patternFirstName.test(req.body.firstName))
            return false

        if (!patternFirstName.test(req.body.lastName))
            return false

        if (!patternEmail.test(req.body.email))
            return false

        if (!patternPhoneNumber.test(req.body.mobile))
            return false

        if (!patternFirstName.test(req.body.companyName))
            return false

        if (!patternFirstName.test(req.body.designation))
            return false

        return true
    }
}

module.exports = new employeeController()