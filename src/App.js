import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render(){
    return(
      <div className="App">
        <h1>Hola</h1>
        <Person name="Jose" age="12" />
        <Person name="Pepe" age="10" >My hobbies: jugar! </Person>
      </div>
    )
      /*var h1 = React.createElement('h1', null, 'Hola soy React!!')
      return React.createElement('div', {className: 'App'}, h1);*/

  }
}

export default App;
