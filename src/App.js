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
  });
  
  const switchNameHandler = (nombre) => {
    //console.log('Was clicked!');
    //DONT DO THIS: this.state.persons[0].name = "Maximilia";
    setPersonsState({
      persons: [
        { name: nombre, age: 28 }, 
        { name: 'JOSE', age: 23 }, 
        { name: 'THOMAS', age: 18 }
      ]
    });
  }

  const switchChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'Max', age: 28 }, 
        { name: event.target.value, age: 23 }, 
        { name: 'THOMAS', age: 18 }
      ]
    });
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <h1>Hola</h1>
      <button onClick={(e) => {
        console.log(e);
        switchNameHandler('Paco pacomé');
      }} 
      style={style}
      >
        Switch Name
      </button>
      <Person
        click={switchNameHandler.bind(this, 'pepasdf')} 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age} />
      <Person 
        changed={switchChangedHandler} 
        click={switchNameHandler.bind(this, 'a')} 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age} >My hobbies: jugar! </Person>
      <Person 
        click={switchNameHandler.bind(this, 'pepasdf')} 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age} />
    </div>
  );
    /*var h1 = React.createElement('h1', null, 'Hola soy React!!')
    return React.createElement('div', {className: 'App'}, h1);*/

  };

export default App;