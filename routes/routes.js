let route = require('express').Router()
let controller = require('../Controller/controller')

route.post('/employee/create', controller.createController)
route.get('/employee/read', controller.getController)
route.patch('/employee/update', controller.updateController)
route.delete('/employee/delete', controller.deleteController)

next = (err) => {
    console.log(err)
    console.log("API has crashed due to unknown reasons.")
}

module.exports = route;