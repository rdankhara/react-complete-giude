import React from 'react';
import classes from './Person.css';

const person = (props) => {
    return (
        <article className={classes.person}>
            <p onClick={props.click}> I am {props.name} and my age is {props.age} </p>
            <p>{props.children}</p>
            <button onClick={props.delete} className={classes.deleteButton}>&times;</button>
        </article>
    );
}

export default person;