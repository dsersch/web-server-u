const express = require('express')
const hbs = require('hbs')

var app = express()

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear())

hbs.registerHelper('screamIt', text => text.toUpperCase())

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: "Home Page",
        welcomeMessage: "Welcome to the show..."
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: "About Page",
    })
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Error handling request'
    })
})

app.listen(3000, () => {
    console.log("server is running on port 3000 👍")
})