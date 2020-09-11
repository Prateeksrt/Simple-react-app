import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {InputItem} from "./demo/InputItem";
import {ListOfItem} from "./demo/ListOfItem";

const App = () => {
    const [itemList, onItemListChange] = useState(["Create new item", "modify the created item"])
    
    const handleInputItem = (item) => {
        onItemListChange(itemList.concat(item));
    };
    return <>
        <ListOfItem items={itemList}/>
        <InputItem onInputItem={handleInputItem}/>
    </>;
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
