import React from 'react';
import {ListOfItem} from "./ListOfItem";
import {InputItem} from "./InputItem";
import {addItem} from "../redux/actions";
import {connect} from "react-redux";
import {FunnyInput} from "./FunnyInput";

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
        
        this.state = {value:"one"}
        
        this.handleInputItem = this.handleInputItem.bind(this);
        this.handleFunnyInput = this.handleFunnyInput.bind(this);
    }
    
    handleInputItem(item) {
        this.props.addItemToList(item);
    }

    handleFunnyInput(enteredValue) {
        this.setState({value: "Funny: "+ enteredValue});
    }
    
    render() {
        return <>
            <h1>{this.props.header + this.props.greeting}</h1>
            <h2>{this.state.value}</h2>
            <ListOfItem items={this.props.itemList}/>
            <InputItem onInputItem={this.handleInputItem}/>
            <FunnyInput value={this.state.value} onEnter={this.handleFunnyInput} />
        </>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppClass);
