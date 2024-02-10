import personsService from '../services/persons'


const DeleteButton = ({person,persons, setPersons}) => {
  const handleClick = (person,persons, setPersons) => {
    return () => {
    if(window.confirm(`Do you really want to delete ${person.name}?`)){
    console.log(persons)
    setPersons(persons.filter(x => x.id!= person.id))
    personsService.remove(person.id)
    }
    
  }}


  return (
    <button onClick={handleClick(person,persons, setPersons)}>delete</button>
  )
}

const Persons = ({persons, search, setPersons}) => {

    return(
        <>
         <ul>
        {persons.filter(x => search.length===0 ? true : x.name.slice(0,search.length).toLowerCase()===search.toLowerCase()).map((x,i) => <li key={i}>{x.name} {x.number} <DeleteButton person={x} persons={persons} setPersons={setPersons}/></li>)}
      </ul>
        </>
    )
}
export default Persons