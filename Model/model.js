const mongoose = require('mongoose')

const patternFirstName = RegExp('^[A-Z][a-z]{2,}$')
const patternLastName = RegExp('^[A-Z][a-z]{2,}$')
const patternPhoneNumber = RegExp('^[0-9]{10}$')
const patternEmail = RegExp('^[a-z0-9]+([._+-][a-z0-9]+)*(@)[0-9a-zA-Z]+[.]{1}[a-z]{2,3}([.][a-z]{2})?$')

//company name, salary, designation
const schema = new mongoose.Schema({
    firstName: {
        type: String,
        validate: {
            validator: function(v) {
                return patternFirstName.test(v);
            },
            message: props => `${props.value} is not a valid first number!`
        },
        required: [true, 'First name is compulsary']
    },
    lastName: {
        type: String,
        validate: {
            validator: function(v) {
                return patternLastName.test(v);
            },
            message: props => `${props.value} is not a valid last number!`
        },
        required: [true, 'Last name is compulsary']
    },
    email: {
        type: String,
        validate: {
            validator: function(v) {
                return patternEmail.test(v);
            },
            message: props => `${props.value} is not a valid email id!`
        },
        required: [true, 'Email is compulsary']
    },
    mobile: {
        type: Number,
        validate: {
            validator: function(v) {
                return patternPhoneNumber.test(v);
            },
            message: props => `${props.value} is not a valid Phone number!`
        },
        required: [true, 'Mobile number is compulsary'],
        unique: true,
    },
    companyName: {
        type: String,
        validate: {
            validator: function(v) {
                return patternFirstName.test(v);
            },
            message: props => `${props.value} is not a valid company name!`
        },
        required: [true, 'Company Name is compulsary']
    },
    salary: {
        type: Number,
        required: false
    },
    designation: {
        type: String,
        validate: {
            validator: function(v) {
                return patternFirstName.test(v);
            },
            message: props => `${props.value} is not a valid designation name!`
        },
        required: [true, 'Designation is compulsary']
    },
})

let model = mongoose.model('samples', schema)

class Model {

    create = (req) => {
        return new Promise((resolve, reject) => {
            model.create(req).then((result) => {
                resolve(result)
            }).catch((error) => {
                reject(error)
            })
        })
    }

    read = (req) => {
        return new Promise((resolve, reject) => {
            model.find(req).then((result) => {
                resolve(result)
            }).catch((error) => {
                reject(error)
            })
        })
    }

    update = (req) => {
        return new Promise((resolve, reject) => {
            model.updateOne(req).then((result) => {
                resolve(result)
            }).catch((error) => {
                reject(error)
            })
        })
    }

    delete = (req) => {
        return new Promise((resolve, reject) => {
            model.deleteOne(req).then((result) => {
                resolve(result)
            }).catch((error) => {
                reject(error)
            })
        })
    }
}

module.exports = new Model()