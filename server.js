const express = require('express')

var app = express()

app.get('/', (req, res) => {
    // res.send("<h1>hello express!</h1>")
    res.send({
        name: "dave",
        likes: [
            "dogs", "cars", "beer"
        ]
    })
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Error handling request'
    })
})

app.listen(3000)