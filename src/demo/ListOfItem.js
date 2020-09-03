import React from 'react';

export const ListOfItem = (props) => {
    return <ul>
        {props.items.map(item => (<li>{item}</li>))}
    </ul>
}
