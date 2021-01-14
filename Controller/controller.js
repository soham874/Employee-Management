let response = {}
let services = require('../Services/service')

class employeeController {

    createController = (req, res, next) => {
        console.log(req.body)
        try {
            services.createService(req.body).then((result) => {
                response.success = result.success
                response.message = result.message
                response.data = result.data
                return res.status(result.statusCode).send(response)
            }).catch((error) => {
                response.success = error.success
                response.message = error.message
                response.error = error.error
                return res.status(error.statusCode).send(response)
            })
        } catch (err) {
            next(err)
        }

    }

    getController = (req, res, next) => {

        try {
            services.getService(req).then((result) => {
                response.success = result.success
                response.message = result.message
                response.data = result.data
                return res.status(result.statusCode).send(response)
            }).catch((error) => {
                response.success = error.success
                response.message = error.message
                response.error = error.error
                return res.status(error.statusCode).send(response)
            })
        } catch (err) {
            next(err)
        }
    }

    updateController = (req, res, next) => {
        try {
            services.updateService(req).then((result) => {
                response.success = result.success
                response.message = result.message
                response.data = result.data
                return res.status(result.statusCode).send(response)
            }).catch((error) => {
                response.success = error.success
                response.message = error.message
                response.error = error.error
                return res.status(error.statusCode).send(response)
            })
        } catch (err) {
            next(err)
        }
    }

    deleteController = (req, res, next) => {
        try {
            services.deleteService(req).then((result) => {
                response.success = result.success
                response.message = result.message
                response.data = result.data
                return res.status(result.statusCode).send(response)
            }).catch((error) => {
                response.success = error.success
                response.message = error.message
                response.error = error.error
                return res.status(error.statusCode).send(response)
            })
        } catch (err) {
            next(err)
        }
    }

}

module.exports = new employeeController()