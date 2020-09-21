import React from "react";
import {ListOfItem} from "./ListOfItem";
import {InputItem} from "./InputItem";
import {useDispatch, useSelector} from "react-redux";
import {addItem, addItemFromApi} from "../redux/actions";

export const App = () => {
    const itemList = useSelector((state) => state.todos);
    const header = useSelector(state => state.object.header);
    
    const dispatch = useDispatch();
    
    const handleApi = () => {
        dispatch(addItemFromApi(3));
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
