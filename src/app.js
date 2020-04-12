const express = require('express')
// express is actually a function, and we call express to create a new express app
// To generate the app we need to call express as below
const app = express()

// app.com
// app.com/help
// app.com/about

// To set up the server to send a response, by using the get method
app.get('', (req, res) => {
    res.send('Hello Express.. !')
})

app.get('/help', (req, res) => {
    res.send('Help Page')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/weather', (req, res) => {
    res.send('Weather page')
})

// currently the server is not up and running
app.listen(3000, () => {
    console.log('App is running on port 3000.')
}) // this starts up the server and it will run in a specific port

// the process of starting a server is an asynchronous process