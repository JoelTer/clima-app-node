const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${ lng}&appid=30a75e9d9adabf31109317077899de33&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}