import { createStore,combineReducers } from "redux";
import countReducer from './countReducer';
import countReducer1 from './countReducer1';

const initState = {
    countReducer: {
        count: 1
    },
    countReducer1: {
        a: 11
    }
}

const rootReducer = combineReducers({
    countReducer1,
    countReducer
})
const store = createStore(rootReducer, initState);

export default store
