import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/persons'
import Notification from './components/Notification'
import './index.css'


const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [persons, setPersons] = useState([])
  const [notification,setNotification] = useState({})

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

  const displayNotification = (notification) => {
    setNotification(notification)
    setTimeout(()=>{
      setNotification({})
    },5000)

  }

  const addName = (event) => {
    event.preventDefault()
    const duplicate = persons.filter((x) => x.name===newName)
    if (duplicate.length>0){
      const curPerson = duplicate[0]
      if(window.confirm(`${curPerson.name} is already in the phonebook, replace the old number with a new one?`)){
        personsService.update(curPerson.id, {id:curPerson.id, name: newName, number: newNumber}).then((res)=>{
          //console.log(res)
          setPersons(persons.filter(x => x.id!=res.data.id).concat(res.data))
        }).catch(err => {
          console.log(err)
          setNotification({message:`${curPerson.name} already deleted`,type:"error"})
          setPersons(persons.filter(x => x.id!=curPerson.id))
          setTimeout(()=>{
            setNotification({})
          },5000)
        })
        
      }
      setNewName('')
      setNewNumber('')
      displayNotification({message:`${curPerson.name} modified`,type:"added"})
    }
    else {
    setPersons(persons.concat({name: newName, number: newNumber}))
    personsService.create({name: newName, number: newNumber})
    displayNotification({message:`${newName} added`,type:"added"})
    setNewName('')
    setNewNumber('')
    


    }
  }

  const formProps = {addName, newName, updateName, newNumber, updateNumber}
  return (
    <div>

      {Object.keys(notification).length > 0 ? <Notification  message={notification.message} type={notification.type}/> : ''}

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