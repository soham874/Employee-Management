let model = require('../Model/model')

class employeeService {

    createService = (req, next) => {
        try {
            console.log("in service")
            return model.create(req).then((result) => {
                return ({ success: true, statusCode: 200, message: "Adding successful", data: result })
            }).catch((error) => {
                return ({ success: false, statusCode: 400, message: "Failed to add record", data: error })
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
                if (result[1] == null)
                    return ({ success: false, statusCode: 400, message: "Failed to retrive any record", data: error })

                return ({ success: true, statusCode: 200, message: "Data retrived successfully", data: result })
            }).catch((error) => {
                return ({ success: false, statusCode: 400, message: "Failed to retrive any record", data: error })
            })
        } catch (err) {
            next(err)
        }
    }

    updateService = (req, next) => {
        try {
            return model.update(req).then((result) => {
                return ({ success: true, statusCode: 200, message: "Data updated successfully", data: result })
            }).catch((error) => {
                return ({ success: false, statusCode: 400, message: "Failed to update record", data: error })
            })
        } catch (err) {
            next(err)
        }
    }

    deleteService = (req, next) => {
        try {
            return model.delete(req, next).then((result) => {
                return ({ success: true, statusCode: 200, message: "Data deleted successfully", data: result })
            }).catch((error) => {
                return ({ success: false, statusCode: 400, message: "Failed to delete record", data: error })
            })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = new employeeService()