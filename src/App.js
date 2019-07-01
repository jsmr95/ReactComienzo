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

  console.log(personsState);
  

  const switchNameHandler = () => {
    //console.log('Was clicked!');
    //DONT DO THIS: this.state.persons[0].name = "Maximilia";
    setPersonsState({
      persons: [
        { name: 'MAX', age: 28 }, 
        { name: 'JOSE', age: 23 }, 
        { name: 'THOMAS', age: 18 }
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hola</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My hobbies: jugar! </Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
    /*var h1 = React.createElement('h1', null, 'Hola soy React!!')
    return React.createElement('div', {className: 'App'}, h1);*/

  };

export default App;