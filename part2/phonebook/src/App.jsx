import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')



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
    if (persons.some((x) => x.name===newName)){
      alert(`ERROR: ${newName} already in phonebook!`)
    }
    else {
    setPersons(persons.concat({name: newName, number: newNumber}))
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
      <Persons persons={persons} search={search}/>
     
    </div>
  )
}

export default App