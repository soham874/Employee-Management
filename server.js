const app = require('express')()
const route = require('./routes/routes')

let port = 3000;

app.use(require('express').json())

app.listen(port, () => {
    console.log(`Server started successfully at port ${port}\n`)
    require('./DBManagement/dbManagement')
})

app.use('/', route)