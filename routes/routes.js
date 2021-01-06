let route = require('express').Router()
let controller = require('../Controller/controller')

route.post('/EmployeeCreate', controller.createController)
route.get('/EmployeeRead', controller.getController)

module.exports = route;