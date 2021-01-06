let route = require('express').Router()
let controller = require('../Controller/controller')

route.post('/addNewData', controller)

module.exports = route;