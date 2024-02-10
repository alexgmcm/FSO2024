import Country from './Country'
import ShowButton from './ShowButton'

const Countries = ({countries, search,setSearch}) => {
const filtCountries = countries.filter(x => x.name.common.slice(0,search.length).toLowerCase() === search.toLowerCase())
//console.log(filtCountries)
let returnval=""
if (filtCountries.length>10){
    return <>  Too many matches, specify filter.</>
}
else if(filtCountries.length==0){
     return  <>"No countries found." </>
}
else if(filtCountries.length>1) {
    //console.log("boo")
     return <><ul> {filtCountries.map((x,i)=><li key={i}>{x.name.common} <ShowButton name={x.name.common} setSearch={setSearch}/></li>)} </ul> </>
}
else { //console.log(filtCountries[0])
     return <> <Country country={filtCountries[0]}/></> }
   
}

export default Countries