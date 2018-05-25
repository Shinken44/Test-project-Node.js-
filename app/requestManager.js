const rp = require('request-promise')

async function getAccuWeather(city, data) {

    try {
        const response = await rp.get({
            uri: 'http://apidev.accuweather.com/locations/v1/search',
            qs: {
                q: city,
                apikey: 'blXx3WB7QMUv7f3j6nJn7A3XLN1y3WwJ'
            },
            json: true
        })

        data = response
        return 0
    } catch (err) {
        return err
    }

}

module.exports.getAccuWeather = getAccuWeather