import React from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

const person = (props) => {
    return (
        <React.Fragment> {/* Builtin Aux component */}
            <p onClick={props.click}> I am {props.name} and my age is {props.age} </p>
            <p>{props.children}</p>
            <button onClick={props.delete} className={classes.deleteButton}>&times;</button>
        </React.Fragment>
    );
}

person.prototype = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    delete: PropTypes.func
}
export default withClass(person, classes.person);