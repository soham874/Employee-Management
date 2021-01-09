let model = require('../Model/model')

class employeeService {

    createService = (req, next) => {
        try {
            console.log("in service")
            return model.create(req).then((result) => {
                return ({ message: "Adding successful", data: result })
            }).catch((error) => {
                return ({ message: "Failed to add record", data: error })
            })
        } catch (err) {
            next(err)
        }
    }

    getService = (req, next) => {
        try {
            let request = {}

            if (req.params._id != null)
                request._id = req.params._id

            return model.read(request).then((result) => {
                return ({ message: "Data retrived successfully", data: result })
            }).catch((error) => {
                return ({ message: "Failed to retrive record", data: error })
            })
        } catch (err) {
            next(err)
        }
    }

    updateService = (req, next) => {
        try {
            return model.update(req).then((result) => {
                return ({ message: "Data updated successfully", data: result })
            }).catch((error) => {
                return ({ message: "Failed to update record", data: error })
            })
        } catch (err) {
            next(err)
        }
    }

    deleteService = (req, next) => {
        try {
            return model.delete(req, next).then((result) => {
                return ({ message: "Data deleted successfully", data: result })
            }).catch((error) => {
                return ({ message: "Failed to delete record", data: error })
            })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = new employeeService()