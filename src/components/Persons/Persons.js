import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{
    
    constructor(props)
    {
        super(props);
    }

    componentWillUnmount(){
        console.log("hook: Person.Js componentWillUnmount");
    }
    render(){
        console.log("hook: Persons.js render");
        return(
        <article>{this.props.persons.map((person, index) => {
            return <Person name={person.name}
                age={person.age}
                // delete={props.delete.bind(this, index)}
                // or below is lambda function way
                delete={()=> this.props.delete(index)}
                key={person.id}>
                </Person>
        })}</article>
    );
    }
}

export default Persons;