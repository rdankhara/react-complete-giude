import React, {Component} from 'react';
import classes from './Cockpit.css';

class Cockpit extends Component {
    constructor(props)
    {
        super(props);

        this.btnClass = '';
        if (props.show){
            this.btnClass = classes.Red;
        }        

        this.assignedClasses = [];
        if (props.persons.length <= 2 ){
            this.assignedClasses.push(classes.red);
        }
    
        if (props.persons.length <= 1){
            this.assignedClasses.push(classes.bold);
        }    
        console.log('hook: Cockpit.js constructor')    
    }
    componentWillMount(){
        console.log('hook: Cockpit.js componentWillMount');
    }
    componentWillReceiveProps(nextProps, nextContext){
        console.log('hook: Cockpit.js componentWillReceiveProps');
    }
    shouldComponentUpdate(nextProps, nextState, nextContext){
        console.log('hook: Cockpit.js shouldComponentUpdate');
        return true;
    }
    render() {
        console.log('hook: Cockpit.js render');
        return(
            <div className={classes.Cockpit}>
                <h1>Hi I am react app</h1>
                <p className={this.assignedClasses.join(' ')}>This is really working </p>
                <button className={this.btnClass}
                    onClick={this.props.toggle}>
                    Toggle Person
                </button>
            </div>
        )
    }
    componentDidMount(){
        console.log('hook: Cockpit.js componentDidMount');
    }
}

export default Cockpit;