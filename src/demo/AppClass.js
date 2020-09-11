import React from 'react';
import {ListOfItem} from "./ListOfItem";
import {InputItem} from "./InputItem";
import {addItem} from "../redux/actions";
import {connect} from "react-redux";

const mapStateToProps = (globalState) => ({
    itemList: globalState.todos,
    header: globalState.object.header
});
const mapDispatchToProps = (dispatch) => ({
    addItemToList: (item) => dispatch(addItem("Class " + item))
});

class AppClass extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleInputItem = this.handleInputItem.bind(this);
    }
    
    handleInputItem(item) {
        this.props.addItemToList(item);
    }
    
    render() {
        return <>
            <h1>{this.props.header}</h1>
            <ListOfItem items={this.props.itemList}/>
            <InputItem onInputItem={this.handleInputItem}/>
        </>;
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppClass);
