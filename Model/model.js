const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is compulsary']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is compulsary']
    },
    email: {
        type: String,
        required: [true, 'Email is compulsary']
    },
    mobile: {
        type: Number,
        required: [true, 'Mobile number is compulsary'],
        unique: true,
    },
    companyName: {
        type: String,
        required: [true, 'Company Name is compulsary']
    },
    salary: {
        type: Number,
        required: false
    },
    designation: {
        type: String,
        required: [true, 'Designation is compulsary']
    }
}, { timestamps: true });

let model = mongoose.model('samples', schema)

class employeeModel {

    create = (req, errorfunction) => {
        try {
            return new Promise((resolve, reject) => {
                model.create(req).then((result) => {
                    resolve(result)
                }).catch((error) => {
                    reject(error)
                })
            })
        } catch (err) {
            errorfunction(err)
        }
    }

    read = (req, errorfunction) => {
        try {
            return new Promise((resolve, reject) => {

                if (req.params.key != null)
                    model.findById(req.params.key).then((result) => {
                        resolve(result)
                    }).catch((error) => {
                        reject(error)
                    })

                model.find({}).then((result) => {
                    resolve(result)
                }).catch((error) => {
                    reject(error)
                })

            })
        } catch (err) {
            errorfunction(err)
        }
    }

    update = (req, errorfunction) => {
        try {
            return new Promise((resolve, reject) => {

                model.findByIdAndUpdate(req.params._id, req.body).then((result) => {
                    resolve(result)
                }).catch((error) => {
                    reject(error)
                })
            })
        } catch (err) {
            errorfunction(err)
        }
    }

    delete = (req, errorfunction) => {
        try {
            return new Promise((resolve, reject) => {
                model.findByIdAndDelete(req.params._id).then((result) => {
                    resolve(result)
                }).catch((error) => {
                    reject(error)
                })
            })
        } catch (err) {
            errorfunction(err)
        }
    }
}

module.exports = new employeeModel()