let route = require('express').Router()
let controller = require('../Controller/controller')

route.post('/addNewData', controller.addController)

module.exports = route;