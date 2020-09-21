import {getUser} from "../network";

export const ADD_ITEM_TYPE = "ADD_ITEM";

export const addItem = (item) => ({type: ADD_ITEM_TYPE, payload: item});

export const addItemFromApi = (id) => {
    return (dispatch) => getUser(id, (value) => dispatch(addItem(value)));
}
