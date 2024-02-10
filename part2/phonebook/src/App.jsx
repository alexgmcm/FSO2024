import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import personsService from './services/persons'



const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log("Fetching data...")
    personsService.getAll().then(res => setPersons(res.data))
  }, [])

  const updateName = (event) => {
    setNewName(event.target.value)
  }
  const updateNumber = (event) => {
    setNewNumber(event.target.value)
  }
  const updateSearch = (event) => {
    setSearch(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const duplicate = persons.filter((x) => x.name===newName)
    if (duplicate.length>0){
      const curPerson = duplicate[0]
      if(window.confirm(`${curPerson.name} is already in the phonebook, replace the old number with a new one?`)){
        personsService.update(curPerson.id, {id:curPerson.id, name: newName, number: newNumber})
        setPersons(persons.filter(x => x.id!=curPerson.id).concat({id:curPerson.id, name: newName, number: newNumber}))
      }
      setNewName('')
      setNewNumber('')
    }
    else {
    setPersons(persons.concat({name: newName, number: newNumber}))
    personsService.create({name: newName, number: newNumber})
    setNewName('')
    setNewNumber('')
    }
  }

  const formProps = {addName, newName, updateName, newNumber, updateNumber}
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} updateSearch={updateSearch}/>
      <h2>add a new</h2>
      <PersonForm {...formProps} />
      <h2>Numbers</h2>
      <Persons persons={persons} search={search} setPersons={setPersons}/>
     
    </div>
  )
}

export default App