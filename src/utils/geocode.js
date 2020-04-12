const request = require('request')

const geocode = (address, callback) => {
    const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYW5pcnVwIiwiYSI6ImNrNGw4dTE0YTFvenozbXF4dWNlYmhyeGkifQ.PuThfcK3VVJ_wBFqNjnjyQ&limit=1'
    request({ url: geocodeUrl, json: true }, (error, response) => {
        if(error) {
            callback('Unable to reach the map box sevice !', undefined)
        } else if(response.body.features.length === 0) {
            callback('Unable to find any result for the request !', undefined)
        } else {
            callback(undefined, 
                {
                    latitude: response.body.features[0].center[1],
                    longitude: response.body.features[0].center[0]
                })
        }
    });
}

module.exports = geocode