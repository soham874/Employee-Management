const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/database', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        () => { console.log("Connection established successfully.\n") }
    ).catch(
        () => { console.log("Failed to connect.\n") }
    )