const express = require('express')
const app = express()
const route = require('./routes/routes')

let port = 3000;

app.use(express.json())
app.use('/', route)

app.listen(port, () => {
    console.log(`Server started successfully at port ${port}\n`)
    require('./DBManagement/dbManagement')
})