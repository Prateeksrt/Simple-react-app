import React from 'react';
import {ListOfItem} from "./ListOfItem";
import {InputItem} from "./InputItem";

export class AppClass extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            itemList: ["Class: Create new item", "Class: modify the created item"]
        };
        
        this.handleInputItem = this.handleInputItem.bind(this);
    }
    
    handleInputItem(item) {
        this.setState({itemList: [...this.state.itemList, item]});
    }
    
    render() {
        return <>
            <ListOfItem items={this.state.itemList}/>
            <InputItem onInputItem={this.handleInputItem}/>
        </>;
    }
}
