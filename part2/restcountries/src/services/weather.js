import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5'
const api_key = import.meta.env.VITE_WEATHER_KEY



const getCityWeather = (city) => {
    return axios.get(`${baseUrl}/weather?q=${city}&appid=${api_key}&units=metric`)
}




export default {getCityWeather}