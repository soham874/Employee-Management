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
        unique: true
    }
})

let model = mongoose.model('samples', schema)

class Model {

    create = (req) => {
        return new Promise((Resolve, Reject) => {
            model.create(req).then(
                (result) => {
                    Resolve(result)
                }
            ).catch(
                (error) => { Reject(error) }
            )
        })
    }
}

module.exports = new Model()