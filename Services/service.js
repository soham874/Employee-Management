let model = require('../Model/model')

class service {

    createService = (req) => {
        return model.create(req).then((result) => {
            return ({ message: "Adding successful", data: result })
        }).catch((error) => {
            return ({ message: "Failed to add record", data: error })
        })
    }

    getService = (req) => {
        return model.read(req).then((result) => {
            return ({ message: "Data retrived successfully", data: result })
        }).catch((error) => {
            return ({ message: "Failed to retrive record", data: error })
        })
    }

    deleteService = (req) => {
        return model.delete(req).then((result) => {
            return ({ message: "Data deleted successfully", data: result })
        }).catch((error) => {
            return ({ message: "Failed to delete record", data: error })
        })
    }
}

module.exports = new service()