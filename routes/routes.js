let route = require('express').Router()
let controller = require('../Controller/controller')

route.post('/EmployeeCreate', controller.createController)
route.get('/EmployeeRead', controller.getController)
route.delete('/EmployeeDelete', controller.deleteController)
route.patch('/EmployeeUpdate', controller.updateController)

module.exports = route;