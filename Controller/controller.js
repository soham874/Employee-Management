let response = {}
let services = require('../Services/services')
let serverCode

class controller {

    addController = async(req, res) => {
        await services.addService(req.body)
            .then(
                (result) => {
                    response.success = true
                    response.message = result.message
                    response.data = result.data
                    serverCode = 200
                },
                (error) => {
                    response.success = false
                    response.message = error.message
                    response.data = error.data
                    serverCode = 400
                }
            )
        return res.status(serverCode).send(response)
    }

}

module.exports = new controller()