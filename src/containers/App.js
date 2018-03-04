import React, { Component } from 'react';
import logo from '../../src/logo.svg';
import './App.css';
import { stat } from 'fs';
import Persons from '../../src/components/Persons/Persons';
import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';

class App extends Component {
  state = {
    userName : "rtdankhara",
    showPerson : false,
    persons : [
      {name : "Rajnikant", age:39, id: 1},
      {name : "Asha", age:37, id:2},
      {name : "Fairy", age:13, id:3}
    ]};

    switchHandler = () => {
      this.setState({persons : [
        {name : "Rajnikant", age:39},
        {name : "Asha Dankhara", age:37},
        {name : "Fairy", age:13}
      ]});
    }

    userNameChangeHandler = (event) => {
        console.log('username change handler fired');
        console.log(event.target.value);
        this.setState({userName : event.target.value});
      }

      togglePerson = () => {
        console.log("toggle person invoked" + this.state.showPerson);
        this.setState({ showPerson : !this.state.showPerson});
      }

      deletePersonHandler = (personIndex) => {
        console.log("delete handler invokde for: " + personIndex);
        let newpersons = this.state.persons.slice();
        newpersons.splice(personIndex, 1);
        this.setState({persons: newpersons});
      }
  render() {
    let person = null ;
    if (this.state.showPerson)
    {
      person = <Persons 
        persons={this.state.persons} 
        delete={this.deletePersonHandler.bind(this)}
        >
        </Persons>
      // person =<article>
      // {
      //   this.state.persons.map((person, index) => {
      //     return <Person name={person.name}
      //       age={person.age}
      //       delete={this.deletePersonHandler.bind(this, index)}
      //       key={person.id}> </Person>
      //   })
      //}
    //</article>;
    }


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
        <button onClick={this.togglePerson}>Toggle Person</button>
        { person }

        <UserInput userName={this.state.userName} change={this.userNameChangeHandler} />
        <UserOutput userName={this.state.userName} />

      </div>
    );
  }
}

export default App;
