const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=effd1f220327775fb69ff2a76a99b027&query=' + latitude + ',' + longitude
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('unable to connect weather service!', undefined)
        } else if (body.error) {
            callback('unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out.' + ' Feels like ' + body.current.feelslike + ' degrees.' + ' The humidity is ' + body.current.humidity + ' percent.')
        }
     })
}

module.exports = forecast