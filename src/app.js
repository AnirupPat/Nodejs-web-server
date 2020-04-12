const path = require('path') // we dont need to install it as its a core node module.. 
const express = require('express')
// express is actually a function, and we call express to create a new express app
// To generate the app we need to call express as below
const app = express()

// Define paths for express config
const publicDir = path.join(__dirname,'..', '/public')
const viewsPath = path.join(__dirname, '../templates')


// app.com
// app.com/help
// app.com/about

// setup handlebar engine and view location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Set up static directory to serve
app.use(express.static(publicDir))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Anirup'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us',
        name: 'Sharan'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        msg: 'This is a help text !'
    })
})

// let these below code be commented
// To set up the server to send a response, by using the get method
// app.get('/help', (req, res) => {
//     res.send([{
//         name: 'Anirup',
//         age: 29
//     },{
//         name: 'Sarah',
//         age: 29
//     }])
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>About Us</h1>')
// })



app.get('/weather', (req, res) => {
    res.send({
        location: 'India',
        weather: 'Humid'
    })
})

// currently the server is not up and running
app.listen(3000, () => {
    console.log('App is running on port 3000.')
}) // this starts up the server and it will run in a specific port

// the process of starting a server is an asynchronous process

console.log(__dirname)
console.log(__filename)




// Dynamic pages with templating
// Handlebars will allow us to render dynamic documents as oppose to static ones
// and it allows us to easily create codes that we can use across pages
// like header and footer components 
// npm i hbs 
