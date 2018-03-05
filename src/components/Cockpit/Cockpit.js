import React from 'react';
import classes from './Cockpit.css';

const cockPit = (props) => {
    console.log('classes .red '+ classes.red)
    let btnClass = '';
    if (props.show){
        btnClass = classes.Red;
    }
    const assignedClasses = [];
    if (props.persons.length <= 2 ){
        assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1){
        assignedClasses.push(classes.bold);
    }
    console.log('assigned classes:' + assignedClasses.join(' '))
    console.log('btnClass"' + btnClass);
    return(
        <div className={classes.cockPit}>
            <h1>Hi I am react app</h1>
            <p className={assignedClasses.join(' ')}>This is really working </p>
            <button className={btnClass}
                onClick={props.toggle}>
                Toggle Person
            </button>
        </div>
    )
};

export default cockPit;