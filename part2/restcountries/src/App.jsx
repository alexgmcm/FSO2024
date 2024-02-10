import { useState, useEffect } from 'react'
import countriesService from './services/countries'
import './App.css'
import Countries from './components/Countries'

const App = () => {
  const [search, setSearch] = useState("")
  const [countries, setCountries] = useState([])
  useEffect(() => {
    countriesService.getAll().then((res) => {setCountries(res.data)})
  },[])

const handleChange = (event) => {
  setSearch(event.target.value)
}
return(
  <div align="left">
    find countries: <input type="text" value={search} onChange={handleChange}/>
    <div>
    <Countries countries={countries} search={search} setSearch={setSearch} />
    </div>
  </div>
  
)

}



export default App
