import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

const App =  props  => { 
  const [ personsState, setPersonState ] = useState({
    persons: [
      { name: 'maiyo', age: 28},
      { name: 'sam', age: 39},
      { name: 'james', age: 40}
    ],
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('was clicked');
    //Dont do this: this.state.persons[0].name = 'Maiyo';
   
    setPersonState({
      persons: [
        { name: 'maiyo pabroquez', age: 28},
        { name: 'sam', age: 39},
        { name: 'james', age: 49}
      ] 
     
    });
   };

    return (
      <div className= 'App'>
        <h1> Hi, Im react App</h1>
        <p> yooooooo</p>
        <button onClick ={switchNameHandler}>Switch name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>

      </div>
    );
}

export default App;


