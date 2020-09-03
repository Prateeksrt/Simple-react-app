import React, {useState} from 'react';

export const InputItem = (props) => {
    const [userInput, onUserInputChange] = useState("Please enter todo item");
    return <>
        <label>Item</label>
        <input 
            value={userInput} 
            onChange={(e) => onUserInputChange(e.target.value)}
        />
        <button onClick={() => props.onInputItem(userInput)}>Add</button>
    </>;
}
