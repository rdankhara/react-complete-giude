import React from 'react';
import './Person.css'
const person = (props) => {
    return (
        <article className="person">
            <p onClick={props.click}> I am {props.name} and my age is {props.age} </p>
            <p>{props.children}</p>
            <button onClick={props.delete} >Delete </button>
        </article>
    );
}

export default person;