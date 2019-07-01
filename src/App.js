import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 }, 
      { name: 'Jose', age: 23 }, 
      { name: 'Thomas', age: 18 }
    ]
  }

  render(){
    return(
      <div className="App">
        <h1>Hola</h1>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My hobbies: jugar! </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    )
      /*var h1 = React.createElement('h1', null, 'Hola soy React!!')
      return React.createElement('div', {className: 'App'}, h1);*/

  }
}

export default App;
