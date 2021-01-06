let model = require('../Model/model')

class service {

    addService = (req) => {
        return model.create(req)
            .then(
                (result) => {
                    return ({ message: "Adding successful", data: result })
                },
                (error) => {
                    return ({ message: "Failed to add record", data: error })
                }
            )
    }
}

module.exports = new service()