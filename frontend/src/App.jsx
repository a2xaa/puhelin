import Person from './components/Person'

const App = ({ persons }) => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ul>
        {persons.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </ul>
    </div>
  )
}

export default App
