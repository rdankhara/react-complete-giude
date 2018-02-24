import React from 'react';

const userOutput = (props) => {
    return (
        <article className="person">
        <p>{props.userName}</p>
        </article>
    )
}

export default userOutput;