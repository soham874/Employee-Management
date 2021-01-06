const mongoose = require('mongoose')

//company name, salary, designation
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
        length: 10,
    }
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