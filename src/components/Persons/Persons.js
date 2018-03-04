import React from 'react';
import Person from './Person/Person';

const persons = (props) => (
        <article>{props.persons.map((person, index) => {
            return <Person name={person.name}
                age={person.age}
                delete={()=> props.delete(index)}
                key={person.id}> </Person>
        })}</article>
    );

export default persons;