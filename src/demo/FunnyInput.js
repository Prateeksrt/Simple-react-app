import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addItem} from "../redux/actions";

export const FunnyInput = (props) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState(props.value);
    const [isValid, setValid] = useState(false);
    
    const validateAndSaveValue = (value) => {
        setValid(value.length > 5);
        setValue(value);
    }
    
    const handleClick = () => {
        dispatch(addItem(value));
        props.onEnter(value);
    };
    
    return (
        <div>
            <input type="text" value={value} onChange={(e) => validateAndSaveValue(e.target.value)} />
            <button onClick={handleClick}>Add Funny Thing</button>
            <div><span>{!isValid && "Invalid input2"}</span></div>
        </div>
    );
}
