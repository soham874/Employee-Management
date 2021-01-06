let route = require('express').Router()
let controller = require('../Controller/controller')

route.post('/EmployeeAdd', controller.addController)
route.get('/EmployeeRead', controller.getController)

module.exports = route;