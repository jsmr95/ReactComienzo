import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 }, 
      { name: 'Jose', age: 23 }, 
      { name: 'Thomas', age: 18 }
    ],
    showPersons: true,
  });
  
  const switchNameHandler = (nombre) => {
    //console.log('Was clicked!');
    //DONT DO THIS: this.state.persons[0].name = "Maximilia";
    setPersonsState({
      persons: [
        { name: nombre, age: 28 }, 
        { name: 'JOSE', age: 23 }, 
        { name: 'THOMAS', age: 18 }
      ],
      showPersons: true,
    });
  }

  const switchChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'Max', age: 28 }, 
        { name: event.target.value, age: 23 }, 
        { name: 'THOMAS', age: 18 }
      ],
      showPersons: true,
    });
  }

   const togglePersonsHandler = () => {
    const doesShow = personsState.showPersons;
    
    setPersonsState({
      persons: [
        { name: 'Max', age: 28 }, 
        { name: 'Jose', age: 23 }, 
        { name: 'Thomas', age: 18 }
      ],
    showPersons: !doesShow});
  };

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  let persons = null;

  if (personsState.showPersons) {
    persons = (
      <div>
        {
          personsState.persons.map( person => {
            return <Person
              click={switchNameHandler.bind(this, 'pruebaClick')} 
              name={person.name} 
              changed={switchChangedHandler} 
              age={person.age} />
            })            
          }
        </div> 
    );
  }

  return (
    <div className="App">
      <h1>Hola</h1>
      <button onClick={togglePersonsHandler} 
      style={style}
      >
        Toggle Persons
      </button>
      { persons }
    </div>
  );
    /*var h1 = React.createElement('h1', null, 'Hola soy React!!')
    return React.createElement('div', {className: 'App'}, h1);*/

  };

export default App;