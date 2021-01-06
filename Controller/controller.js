let response = {}
let services = require('../Services/service')

class controller {

    createController = (req, res) => {
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

    }

    getController = (req, res) => {
        services.getService(req.body).then((result) => {
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
    }

    deleteController = (req, res) => {
        services.deleteService(req.body).then((result) => {
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
    }
}

module.exports = new controller()