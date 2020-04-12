const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const loc = latitude+','+longitude
    const coordinates = encodeURIComponent(loc)
    const url = 'http://api.weatherstack.com/current?access_key=00fb213314d4f0b73ca9a36944be04c8&query='+coordinates+'&units=f'
    request({ url: url, json: true }, (error, response) => {
        // we can destructure this json as this - {url, json: true}
        // instead of (error, response), we can destructure it
        // (error, {body})
        // if we are passing json = true then we dont need to parse this as below
        // const data = JSON.parse(response.body)
        const data = response.body
        if(error) {
            callback('Unable to connect to weather app', undefined)
        } else if(response.body.error) {
            // we can destructure it like if(body.error)
            // break the url and check
            callback(undefined, response.body.error.info)
        } else {
            callback(undefined,data.current.weather_descriptions[0] +'. It is currently ' +data.current.temperature + ' degrees and feels like ' +data.current.feelslike + ' degress')  
        }
    });
}

module.exports = forecast

// Have added the destructure in just comments to avoid confusion