import React from 'react';

const userInput = (props) => {
    return (
        <input type="text" value={props.userName} onChange={props.change} />
    )
}

export default userInput;