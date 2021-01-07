let route = require('express').Router()
let controller = require('../Controller/controller')

route.post('/employee/create', controller.createController)
route.get('/employee/read', controller.getController)
route.patch('/employee/update', controller.updateController)
route.delete('/employee/delete', controller.deleteController)

module.exports = route;