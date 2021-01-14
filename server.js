const express = require('express')
const app = express()
const cors = require('cors')
const route = require('./routes/routes')

let port = 3000;

app.use(cors())
app.use(express.json())
app.use('/', route)

let response = {}
app.use((err, req, res, next) => {
    response.success = "false"
    response.message = "API has crashed"
    res.status(500).send(response)
})

app.listen(port, () => {
    console.log(`Server started successfully at port ${port}\n`)
    require('./DBManagement/dbManagement')
})