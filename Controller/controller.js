let response = {}
let services = require('../Services/service')

class controller {

    addController = (req, res) => {
        services.addService(req.body)
            .then(
                (result) => {
                    response.success = true
                    response.message = result.message
                    response.data = result.data
                    return res.status(200).send(response)
                },
                (error) => {
                    response.success = false
                    response.message = error.message
                    response.data = error.data
                    return res.status(400).send(response)
                }
            )

    }

}

module.exports = new controller()