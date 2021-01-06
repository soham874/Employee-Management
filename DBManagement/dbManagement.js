const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/demo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        () => { console.log("Connection established successfully.") },
        () => { console.log("Failed to connect.") }
    )