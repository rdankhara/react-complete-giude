import React, { Component } from 'react';
import logo from '../../src/logo.svg';
import './App.css';
import { stat } from 'fs';
import Persons from '../../src/components/Persons/Persons';
import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      userName : "rtdankhara",
      showPerson : false,
      toggleClicked : 0,
      persons : [
        {name : "Rajnikant", age:39, id: 1},
        {name : "Asha", age:37, id:2},
        {name : "Fairy", age:13, id:3}
      ]};
      console.log('hook App.js constructor')
  }
  componentDidCatch(error, errorInfo){
    console.log('hook App.js componentDidCatch');
  }
  componentDidMount(){
    console.log('hook App.js componentDidMount');
  }
  componentWillMount(){
    console.log('hook App.js componentWillMount');
  }
  componentWillReceiveProps(nextProps, nextState, nextContext)
  {
    console.log('hook App.js componentWillReceivePros');
  }
  shouldComponentUpdate(nextProps, nextState, nextContext){
    console.log('hook App.js shouldComponentUpdate')
    return true;
  }
  
  componentWillUpdate()
  {
    console.log('hook App.js componentWillUpdate');
  }
    switchHandler = () => {
      this.setState({persons : [
        {name : "Rajnikant", age:39},
        {name : "Asha Dankhara", age:37},
        {name : "Fairy", age:13}
      ]});
    }

    userNameChangeHandler = (event) => {
        console.log(event.target.value);
        this.setState({userName : event.target.value});
      }

      togglePersonHandler = () => {
        //Use below approach in case if you rely on previous state properties like toggleClicked or showPerson
          this.setState((prevState, props) => {
            console.log("toggleClicked" + prevState.toggleClicked);
          return {
            showPerson : !prevState.showPerson,
            toggleClicked: prevState.toggleClicked + 1
            };
          }
        );
    }
    
      deletePersonHandler = (personIndex) => {
        let newpersons = this.state.persons.slice();
        newpersons.splice(personIndex, 1);
        this.setState({persons: newpersons});
      }

  render() {
    console.log("hook App.js component render")
    let person = null ;
    if (this.state.showPerson)
    {
      person = <Persons 
        persons={this.state.persons} 
        delete={this.deletePersonHandler}>
        </Persons>
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Cockpit toggle={this.togglePersonHandler} persons={this.state.persons} show={this.state.showPerson}/>
        { person }
        <UserInput userName={this.state.userName} change={this.userNameChangeHandler} />
        <UserOutput userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
