const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

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

    create = (req, next) => {
        try {
            console.log("in model")
            return new Promise((resolve, reject) => {
                model.create(req).then((result) => {
                    resolve(result)
                }).catch((error) => {
                    reject(error)
                })
            })
        } catch (err) {
            next(err)
        }
    }

    read = (req, next) => {
        try {
            return new Promise((resolve, reject) => {
                model.find(req).then((result) => {
                    resolve(result)
                }).catch((error) => {
                    reject(error)
                })

            })
        } catch (err) {
            next(err)
        }
    }

    update = (req, next) => {
        try {
            return new Promise((resolve, reject) => {

                model.findByIdAndUpdate(req.params._id, req.body).then((result) => {
                    resolve(result)
                }).catch((error) => {
                    reject(error)
                })
            })
        } catch (err) {
            next(err)
        }
    }

    delete = (req, next) => {
        try {
            return new Promise((resolve, reject) => {
                model.findByIdAndDelete(req.params._id).then((result) => {
                    resolve(result)
                }).catch((error) => {
                    reject(error)
                })
            })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = new employeeModel()