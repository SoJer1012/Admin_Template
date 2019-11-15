import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import rootReducer from './pages/tool/todolist/reducers/todoListRoot';
import Routes from './routes';
// import store from './store/reducer';

const store = createStore(rootReducer)
ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);

