let model = require('../Model/model')

class service {

    addService = (req) => {
        return model.create(req).then((result) => {
            return ({ message: "Adding successful", data: result })
        }).catch((error) => {
            return ({ message: "Failed to add record", error: error })
        })
    }
}

module.exports = new service()