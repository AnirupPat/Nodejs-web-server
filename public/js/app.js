console.log('Client side JS file is loaded')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

// Set up the call to fetch weather for Bangalore
// Get the parse JSON response 
// If error property, print error
// If no error property, print location and forecast

// this will basically fetch the weather data for the specified location
// we have already written the code for it in src/app.js
fetch('http://localhost:3000/weather?address=Bangalore').then((response) => {
    response.json().then((data) => {
        if(data.error) {
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.weather)
        }
    })
})

const weatherFrom = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

weatherFrom.addEventListener('submit', (e) => {
    e.preventDefault() // its going to prevent the default behaviour of refreshing
    // the browser allowing the server to render a new page and instead
    // its gonna do nothing.. 

    const location = search.value
    console.log(location)

    fetch('http://localhost:3000/weather?address='+location).then((response) => {
        response.json().then((data) => {
            messageOne.textContent = ''
            messageTwo.textContent = ''
            if(data.error) {
                console.log(data.error)
                messageTwo.textContent = data.error
            } else {
                console.log(data.location)
                console.log(data.weather)

                messageOne.textContent = data.weather
            }
        })
    })
})

