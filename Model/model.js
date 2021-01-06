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
        unique: true
    }
})

let model = mongoose.model('sample', schema)

class Model {
    create = (req) => {
        return modelPromise = new Promise((Resolve, Reject) => {
            model.create(req)
                .then(
                    () => { Resolve(result) },
                    () => { Reject(error) })
        })
    }
}

module.exports = new Model()