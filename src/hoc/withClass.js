import React, {Component} from 'react';

// const withClass = (WrappedComponent, classname) => {
//     return (props) => (<div className={classname} >
//     <WrappedComponent {...props}/>
//     </div>);
// }

//or using statteful component as below

const withClass = (WrappedComponent, classname) => {
    return class extends Component{
        constructor(props){
            super(props);
        }
        render(){
            return (<div className={classname} >
                <WrappedComponent {...this.props}/>
                </div>);
        }
    }
}
export default withClass;