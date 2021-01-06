const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/demo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        () => { console.log("Connection established successfully.\n") },
        () => { console.log("Failed to connect.\n") }
    )