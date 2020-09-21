import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./demo/App";
import AppClass from "./demo/AppClass";
import {store} from "./redux/reducer";
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        {/*<App />,*/}
        <AppClass greeting={" Version 1.0"}/>
    </Provider>,
    document.getElementById('root')
);
