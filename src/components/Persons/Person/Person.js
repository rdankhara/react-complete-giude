import React from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';

const person = (props) => {
    return (
        <React.Fragment> {/* Builtin Aux component */}
            <p onClick={props.click}> I am {props.name} and my age is {props.age} </p>
            <p>{props.children}</p>
            <button onClick={props.delete} className={classes.deleteButton}>&times;</button>
        </React.Fragment>
    );
}

export default withClass(person, classes.person);