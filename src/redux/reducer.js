import {createStore} from "redux";
import {ADD_ITEM_TYPE} from "./actions";

const initialState = {
    todos:["Redux: Create new item", "Redux: modify the created item"],
    object: {
        header: "New Prateek's TODO List"
    }
};

const todoApp = (oldState = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM_TYPE:
            return { ...oldState, todos: [...oldState.todos, action.payload]};
        default:
            return oldState;
    }
} 

export const store = createStore(todoApp);
