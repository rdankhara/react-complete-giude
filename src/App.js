import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import { stat } from 'fs';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userName : "rtdankhara",
    showPerson : false,
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

    userNameChangeHandler = (event) => {
        console.log('username change handler fired');
        console.log(event.target.value);
        this.setState({userName : event.target.value});
      } 
    
      togglePerson = () => {
        console.log("toggle person invoked" + this.state.showPerson);
        this.setState({ showPerson : !this.state.showPerson

        })
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
        <button onClick={this.togglePerson}>Toggle Person</button>
        { this.state.showPerson ?
        <article> 
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
          </article>
          : null
      }
        
        <UserInput userName={this.state.userName} change={this.userNameChangeHandler} />
        <UserOutput userName={this.state.userName} />
          
      </div>
    );
  }
}

export default App;
