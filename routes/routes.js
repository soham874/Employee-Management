let route = require('express').Router()
let controller = require('../Controller/controller')

route.post('/EmployeeCreate', controller.createController)
route.get('/EmployeeRead', controller.getController)
route.patch('/EmployeeUpdate', controller.updateController)
route.delete('/EmployeeDelete', controller.deleteController)

module.exports = route;