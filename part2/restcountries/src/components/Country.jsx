import Weather from "./Weather"

const Country = ({country}) => {

return (
<>
<h1>{country.name.common}</h1>
capital {country.capital} <br/>
area {country.area} <br/>
<br/>
<h2>languages</h2>
<ul>{Object.values(country.languages).map((x,i) => <li key={i}>{x}</li>)}</ul>
<img src={country.flags.png}/>
<Weather country={country}/>

</>
)

}

export default Country