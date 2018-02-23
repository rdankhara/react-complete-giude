import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import { stat } from 'fs';

class App extends Component {
  state = {
    persons : [
      {name : "Rajnikant", age:39},
      {name : "Asha", age:37},
      {name : "Fairy", age:13}
    ]};

    switchHandler = () => {
      this.setState({persons : [
        {name : "Rajnikant", age:39},
        {name : "Asha Dankhara", age:37},
        {name : "Fairy", age:13}
      ]});
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.switchHandler}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          click={this.switchHandler}>Update using click event</Person>
        <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} >
            My Hobbies includes shopping</Person>
        <Person 
          name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
