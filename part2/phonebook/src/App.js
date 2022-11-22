import { useState } from 'react'
const Filter = ({handleFilter}) => {
  return (<div>
    filter by name 
    <input 
     onChange={handleFilter}/>
  </div>)
}
const Person = ({addNewPerson, handleNewPerson, handleNewNumber}) => {
  return (
  <form onSubmit={addNewPerson}>
    <div>
      name: <input
              onChange={handleNewPerson} />
    </div>
    <div>
      number: <input 
                onChange={handleNewNumber}/>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>)
}
const Persons = ({filteredNames}) => {
  return (
    <div>
        <ul>
          {filteredNames.map((filteredNames, idx) =>
            <li key={idx}> {filteredNames.name} {filteredNames.number} </li>)}
        </ul>
      </div>
  )
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '123-456-7890' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showFilter, setShowFilter] = useState(false)
  const [filterName, setFilterName] = useState('')
  
  const addNewPerson = (event) => {
    event.preventDefault()
    if(nameOrNumberExists()) return
    setPersons([...persons, {name:  newName, number: newNumber}])
    
  }
  const filteredNames = showFilter 
          ? persons.filter(persons => {
          return persons.name.toLowerCase().includes(filterName.toLowerCase())
  })
          : persons
  const nameOrNumberExists = () => {
    let n = false
    let nr = false
    persons.forEach(p => {
      if(JSON.stringify(p.name) === JSON.stringify(newName)) {
        n= true
        return
      }
      if(JSON.stringify(p.number) === JSON.stringify(newNumber)) {
        nr = true
        return
      }
    })
    if(n) {
      alert(`${newName} already in phonebook`)
      return true
    }
    if(nr) {
      alert(`${newNumber} already in phonebook`)
      return true
    }
    return false
  }
  
  const handleNewPerson = (event) => {
    setNewName(event.target.value)
  }
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilter = (event) => {
    setShowFilter(true)
    setFilterName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter}/>
      <h2>add new person</h2>
      <Person addNewPerson={addNewPerson} handleNewPerson={handleNewPerson} handleNewNumber={handleNewNumber}/>
      <h2>Numbers</h2>
      <Persons filteredNames={filteredNames}/>
    </div>
  )
}

export default App