import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'maiyo', age: 28},
      { name: 'sam', age: 39},
      { name: 'james', age: 40}
    ]
  }

  render() {
    return (
      <div className= 'App'>

        <h1> Hi, Im react App</h1>
        <p> yooooooo</p>
        <button>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

      </div>
    );
  }
}

export default App;
