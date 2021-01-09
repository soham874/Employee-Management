let route = require('express').Router()
let controller = require('../Controller/controller')
let validator = require('../middleware/validator')

route.post('/employee/create',
    controller.createController
)

route.post('/employee/read/:_id', validator.validation, controller.getController)
route.get('/employee/read', controller.getController)

route.put('/employee/update/:_id', controller.updateController)

route.delete('/employee/delete/:_id', controller.deleteController)

module.exports = route;