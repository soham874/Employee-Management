let route = require('express').Router()
let controller = require('../Controller/controller')
let validator = require('../middleware/validator')

route.post('/employee/create', validator.validation, controller.createController)

route.post('/employee/read/:_id', controller.getController)
route.get('/employee/read', controller.getController)

route.put('/employee/update/:_id', controller.updateController)

route.delete('/employee/delete/:_id', controller.deleteController)

module.exports = route;