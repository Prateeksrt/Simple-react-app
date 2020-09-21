import React from 'react';

export const ListOfItem = (props) => {
    return <ul>
        {props.items.map((item, index) => (<li key={index}>{item}</li>))}
    </ul>
}
