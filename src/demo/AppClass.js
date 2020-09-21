import React from 'react';
import {ListOfItem} from "./ListOfItem";
import {InputItem} from "./InputItem";
import {addItem, addItemFromApi} from "../redux/actions";
import {connect} from "react-redux";

const mapStateToProps = (globalState) => ({
    itemList: globalState.todos,
    header: globalState.object.header
});

const mapDispatchToProps = (dispatch) => ({
    addItemToList: (item) => dispatch(addItem("Class " + item)),
    addItemFromApi: (id) => dispatch(addItemFromApi(id))
});

class AppClass extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { value: 1}
        
        this.handleInputItem = this.handleInputItem.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.callApi = this.callApi.bind(this);
    }
    
    handleInputItem(item) {
        this.props.addItemToList(item);
    }

    handleValueChange(enteredValue) {
        this.setState({value: enteredValue});
    }
    
    callApi() {
        this.props.addItemFromApi(this.state.value);
        this.setState({value:""});
    }
    
    render() {
        return <>
            <h1>{this.props.header + this.props.greeting}</h1>
            <ListOfItem items={this.props.itemList}/>
            <InputItem onInputItem={this.handleInputItem}/>
            <div>
                <input type="text" value={this.state.value} onChange={(e) => this.handleValueChange(e.target.value)} />
                <button onClick={this.callApi}>Call Api</button>
            </div>
        </>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppClass);
