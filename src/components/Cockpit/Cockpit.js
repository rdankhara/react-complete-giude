import React from 'react';
import './Cockpit';
const cockPit = (props) => {

    const assignedClasses = [];
    if (props.persons.length <= 2 ){
        assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1){
        assignedClasses.push(classes.bold);
    }

    return(
        <div>
            <h1>Hi I am react app</h1>
            <p className={assignedClasses.join(' ')}>This is really working </p>
            <button className={btnClass}
                onClick={togglePersonHandler}>
                Toggle Person
            </button>
        </div>
    )
};

export default cockPit;