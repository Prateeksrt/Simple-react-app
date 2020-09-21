import React, {useState} from "react";
import {ListOfItem} from "./ListOfItem";
import {InputItem} from "./InputItem";
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../redux/actions";

export const App = () => {
    const itemList = useSelector((state) => state.todos);
    const header = useSelector(state => state.object.header);
    
    const dispatch = useDispatch();
    
    const handleApi = () => {
        addItemFromApi(3, dispatch);
    }
    
    const handleInputItem = (item) => {
        dispatch(addItem(item));
    };
    
    return <>
        <h1>{header}</h1>
        <ListOfItem items={itemList}/>
        <InputItem onInputItem={handleInputItem}/>
        <div>
            <button onClick={handleApi} >Call Api</button>
        </div>
    </>;
}
