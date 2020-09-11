import React, {useState} from "react";
import {ListOfItem} from "./ListOfItem";
import {InputItem} from "./InputItem";

export const App = () => {
    const [itemList, onItemListChange] = useState(["Create new item", "modify the created item"]);

    const handleInputItem = (item) => {
        onItemListChange(itemList.concat(item));
    };
    return <>
        <ListOfItem items={itemList}/>
        <InputItem onInputItem={handleInputItem}/>
    </>;
}
