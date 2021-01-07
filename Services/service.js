let model = require('../Model/model')

class employeeService {

    createService = (req, errorfunction) => {
        try {
            return model.create(req, errorfunction).then((result) => {
                return ({ message: "Adding successful", data: result })
            }).catch((error) => {
                return ({ message: "Failed to add record", data: error })
            })
        } catch (err) {
            errorfunction(err)
        }
    }

    getService = (req, errorfunction) => {
        try {
            return model.read(req, errorfunction).then((result) => {
                return ({ message: "Data retrived successfully", data: result })
            }).catch((error) => {
                return ({ message: "Failed to retrive record", data: error })
            })
        } catch (err) {
            errorfunction(err)
        }
    }

    updateService = (req, errorfunction) => {
        try {
            return model.update(req, errorfunction).then((result) => {
                return ({ message: "Data updated successfully", data: result })
            }).catch((error) => {
                return ({ message: "Failed to update record", data: error })
            })
        } catch (err) {
            errorfunction(err)
        }
    }

    deleteService = (req, errorfunction) => {
        try {
            return model.delete(req, errorfunction).then((result) => {
                return ({ message: "Data deleted successfully", data: result })
            }).catch((error) => {
                return ({ message: "Failed to delete record", data: error })
            })
        } catch (err) {
            errorfunction(err)
        }
    }
}

module.exports = new employeeService()