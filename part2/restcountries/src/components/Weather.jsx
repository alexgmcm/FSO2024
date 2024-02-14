import { useEffect, useState } from 'react'
import weatherService from '../services/weather'


const Weather = ({country}) => {
const [capitalWeather,setCapitalWeather] = useState({})
useEffect(() => {
    console.log(`Sending weather request for ${country.capital}`)
    weatherService.getCityWeather(country.capital).then((res) => {
        console.log(res.data)
        setCapitalWeather(res.data)
    })
  },[country])

if(Object.keys(capitalWeather).length==0){
    return ""
}
else{
return (
<>
<h2>weather in {country.capital}</h2>
temperature {capitalWeather.main.temp} Celcius
<div>
<img src={`https://openweathermap.org/img/wn/${capitalWeather.weather[0].icon}@2x.png`}/>
</div>
wind {capitalWeather.wind.speed} m/s 
</>
)
}
}
export default Weather